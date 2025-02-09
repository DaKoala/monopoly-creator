/// <reference types="react-scripts" />

import Electron from 'electron';
import NodeSSH from 'node-ssh';
import LowDB from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

declare global {
  interface Window {
    require(module: 'electron'): typeof Electron;
    require(module: 'node-ssh'): typeof NodeSSH;
    require(module: 'lowdb'): typeof LowDB;
    require(module: 'lowdb/adapters/FileSync'): typeof FileSync;
  }
  declare module '*.less' {
    const styles: Record<string, string>;
    export default styles;
  }
}
