import dateFormat from 'dateformat';
import BaseUtil from './base.util';
import Config from '../config/base.config';

export default abstract class Debug {
    public static readonly TIMING: number = 0;
    public static readonly DEBUG: number = 1;
    public static readonly INFO: number = 2;
    public static readonly WARNING: number = 3;
    public static readonly ERROR: number = 4;
    public static readonly FATAL: number = 5;

    public static logTiming(message: any, timeStart: number, timeEnd: number = new Date().getTime(), errModule?: string, path?: string): void {
        if (Config.logLevel <= this.TIMING) Debug.log(message + ` (${timeEnd - timeStart}ms)`, 'TIMING', errModule, path);
    }

    public static logDebug(message: any, errModule?: string, path?: string): void {
        if (Config.logLevel <= this.DEBUG) Debug.log(message, 'DEBUG', errModule, path);
    }

    public static logInfo(message: any, errModule?: string, path?: string): void {
        if (Config.logLevel <= this.INFO) Debug.log(message, 'INFO', errModule, path);
    }

    public static logWarning(message: any, errModule?: string, path?: string): void {
        if (Config.logLevel <= this.WARNING) Debug.log(message, 'WARNING', errModule, path);
    }

    public static logError(message: any, errModule?: string, path?: string): void {
        if (Config.logLevel <= this.ERROR) Debug.log(message, 'ERROR', errModule, path);
    }

    public static logFatal(message: any, errModule?: string, path?: string): void {
        if (Config.logLevel <= this.FATAL) Debug.log(message, 'FATAL', errModule, path);
    }

    private static log(message: any = '', type: string = 'DEBUG', errModule: string = 'NoModule', path: string = ''): void {
        errModule = errModule.length > 25 ? errModule.split('.').pop() || errModule : errModule;
        errModule = errModule.length > 25 ? errModule.substr(-25) : errModule;
        errModule = errModule + ' '.repeat(25).substr(0, 25 - errModule.length);
        type = type + ' '.repeat(10).substr(0, 10 - type.length);
        let logText = `${dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss')} | ${type} | ${errModule} | ${path ? path + ' ' : ''}${BaseUtil.stringify(message)}`;
        console.log(logText);
    }
}