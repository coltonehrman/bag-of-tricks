export function isIp(value: string) {
	if (value.length > 'xxx.xxx.xxx.xxx'.length) {
		return false;
	}

	const parts = value.split('.');

	if (parts.length !== 4) {
		return false;
	}

	for (const part of parts) {
		if (!part) {
			return false;
		}

		if (part.length > 'xxx'.length) {
			return false;
		}

		if (Number.isNaN(Number(part))) {
			return false;
		}
	}

	return true;
}
