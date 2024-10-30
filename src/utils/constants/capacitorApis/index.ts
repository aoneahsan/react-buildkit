import { Capacitor } from '@capacitor/core';

export const isCapAndroid: boolean = Capacitor.getPlatform() === 'android';
export const isCapIOS: boolean = Capacitor.getPlatform() === 'ios';
export const isCapWeb: boolean = Capacitor.getPlatform() === 'web';
export const isCapMobileApp: boolean = !isCapWeb;
export const isHybrid: boolean = isCapIOS || isCapAndroid;
