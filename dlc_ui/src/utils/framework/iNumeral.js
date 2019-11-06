import numeral from 'numeral'

const o = {
	format(v) {
		let vStr = String(v),
			vIntStr = '0';

		if(vStr.split('\.')[0].length < 5) {
			return numeral(v).format('0,0.00');
		}
		if(vStr.split('\.')[0].length < 9) {
			vIntStr = vStr.split('\.')[0];

			return `${ numeral(Number(vIntStr.substr(0, vIntStr.length - 4)) + Number(`0.${ vIntStr.substr(-4) }`)).format('0,0.00') }万`;
		}
		vIntStr = vStr.split('\.')[0];

		return `${ numeral(Number(vIntStr.substr(0, vIntStr.length - 8)) + Number(`0.${ vIntStr.substr(-8) }`)).format('0,0.00') }亿`;
	}
};

export default o;