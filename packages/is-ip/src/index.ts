import {_isIp} from './is-ip.impl.js';

export function isIp(value?: any) {
	try {
		return _isIp(value); // eslint-disable-line @typescript-eslint/no-unsafe-argument
	} catch (error) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		console.warn('isIp() triggered an error, this should not happen.\nCheck with @coltonje95 or open an issue at https://github.com/coltonehrman/bag-of-tools');
		throw error;
	}
}
