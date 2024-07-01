import { Capacitor } from '@capacitor/core'


export const isCapAndroid = Capacitor.getPlatform() === 'android'
export const isCapIOS = Capacitor.getPlatform() === 'ios'
export const isCapWeb = Capacitor.getPlatform() === 'web'
export const isCapMobileApp = !isCapWeb
