#!/usr/bin/env node
const { Command } = require("commander");
import path from 'path';
const fs = require('fs');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');

import webpackConfig from './default.config';
import { getDefaultHtml } from './defaults/html.default';
import { getDefaultIndexTS } from './defaults/indexTS.default';
import { getDefaultSCSS } from './defaults/scss.default';
import { getDefaultTsConfig } from './defaults/tsconfig.default';

const getProjectEntries = () => {
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    return {
        entry: packageJson.entry || './index.ts',
        entryHTML: packageJson.entryHTML || './index.html'
    };
};

const program = new Command();

program
    .name('flick')
    .description('CLI para rodar e buildar projetos com o Webpack')
    .version('1.0.0');


program
    .command('init')
    .description('Inicializa um projeto FlickJS')
    .action(() => {
        const projectRoot = process.cwd();
        const htmlPath = path.join(projectRoot, "index.html");
        const tsPath = path.join(projectRoot, "index.ts");
        const scssPath = path.join(projectRoot, "index.scss");
        const tsconfigPath = path.join(projectRoot, "tsconfig.json");

        fs.writeFileSync(htmlPath, getDefaultHtml());
        fs.writeFileSync(tsPath, getDefaultIndexTS());
        fs.writeFileSync(scssPath, getDefaultSCSS());
        fs.writeFileSync(tsconfigPath, getDefaultTsConfig());

        const packageJsonPath = path.join(projectRoot, 'package.json');

        if (fs.existsSync(packageJsonPath)) {
            try {
                // Lendo o package.json
                const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

                // Adicionando o script "start"
                packageJson.scripts = packageJson.scripts || {};
                packageJson.scripts.start = "flick start";
                fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');

            } catch (err) {
                console.error('Erro ao modificar package.json:', err);
                process.exit(1);
            }
        } else {
            console.warn('Nenhum package.json encontrado.');
        }

        console.log('Projeto inicializado com sucesso!');
    });

// Comando para iniciar o servidor de desenvolvimento
program
    .command('start')
    .description('Inicia o Webpack Dev Server em modo de desenvolvimento')
    .action(() => {
        const projectEntries = getProjectEntries();

        const config = {
            ...webpackConfig,
            entry: projectEntries.entry,
            mode: 'development',
            plugins: [
                new HtmlWebpackPlugin({
                    filename: 'index.html',
                    template: projectEntries.entryHTML,
                })
            ]
        };

        const compiler = webpack(config);
        const server = new WebpackDevServer({ ...config.devServer, open: true }, compiler);

        server.start().then(() => {
            console.log('Servidor de desenvolvimento iniciado em modo de desenvolvimento.');
        }).catch((err: any) => {
            console.error('Erro ao iniciar o servidor:', err);
            process.exit(1);
        });
    });

// Comando para realizar o build
program
    .command('build')
    .description('Realiza o build de produção com Webpack')
    .action(() => {
        const projectEntries = getProjectEntries();

        const config = {
            ...webpackConfig,
            entry: projectEntries.entry,
            output: {
                ...webpackConfig.output,
                path: `${process.cwd()}/build`,
            },
            mode: 'production',
            plugins: [
                new HtmlWebpackPlugin({
                    filename: 'index.html',
                    template: projectEntries.entryHTML,
                })
            ]
        };

        const compiler = webpack(config);

        compiler.run((err: any, stats: any) => {
            if (err) {
                console.error('Erro no build:', err);
                process.exit(1);
            }
            console.log(
                stats.toString({
                    colors: true,
                    modules: false,
                    children: false,
                    chunks: false,
                    chunkModules: false,
                })
            );
            console.log('Build finalizado com sucesso!');
        });
    });

program.parse(process.argv);
