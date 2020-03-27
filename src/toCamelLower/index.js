import isPlainObject from 'lodash.isplainobject';
import camelCase from 'lodash.camelcase';
import isArray from 'lodash.isarray';

const needsCamelCase = str => {
	return str.indexOf("-") > -1 || str.indexOf("_") > -1;
};

export const toCamelLower = obj => {
	Object.keys(obj).forEach(key => {
		const camelCasedKey = needsCamelCase(key) ? camelCase(key) : key;
		const value = obj[key];
		delete obj[key];
		obj[camelCasedKey] = value;
		
		if (isPlainObject(value)) {
			obj[camelCasedKey] = toCamelLower(value);
		}
		
		if (isArray(value)) {
			obj[camelCasedKey] = value.map(item => {
				if (isPlainObject(item)) {
					return toCamelLower(item);
				} else {
					return item;
				}
			});
		}
	});
	
	return obj;
};
