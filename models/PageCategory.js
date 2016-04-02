var keystone = require('keystone');

/**
 * PageCategory Model
 * ==================
 */

var PageCategory = new keystone.List('PageCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

PageCategory.add({
	name: { type: String, required: true }
});

PageCategory.relationship({ ref: 'Page', path: 'categories' });

PageCategory.register();
