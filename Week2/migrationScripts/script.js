module.exports = function (migration) {
    const category = migration.createContentType('category')
      .name('Category')
      .displayField('name');
    category.createField('name').type('Symbol').required(true).name('Name');

    const blogPost = migration.editContentType('post')
    blogPost.createField('category_ref')  
      .name('Category')
      .type('Link')
      .linkType('Entry')
      .validations([
        {
          "linkContentType": ['category']
        }
      ])
  
    migration.deriveLinkedEntries({
      contentType: 'blogPost',
      from: ['category'],
      toReferenceField: 'category_ref',
      derivedContentType: 'category',
      derivedFields: ['name', 'slug'],
      identityKey: async (from) => {
        return from.category['en-US'].toLowerCase()
      },
      deriveEntryForLocale: async (from, locale) => {
        return {
          name: from.category[locale],
          slug: from.category[locale].toLowerCase()
        }
      }
    })
  
    blogPost.editField('category').disabled(true)
  }