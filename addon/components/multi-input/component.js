import Ember from 'ember';
import layout from './template';

const { get, set, on, isEmpty, isArray, assert } = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: ['readOnly:read-only'],

  inputType: 'text',
  addBtnText: 'Add',
  removeBtnText: 'Remove',
  collection: null,
  readOnly: false,

  ensureFirstInputExists: on('init', function() {
    const collection = get(this, 'collection') || Ember.A([]);

    // ensure that the collection is an array
    assert('Values must be an array.', isArray(collection));

    // ensure that there is at least one item in the collection
    if (isEmpty(collection)) {
      collection.addObject(Ember.Object.create({value: ''}));
    }

    set(this, 'collection', collection);
  }),

  actions: {
    addNew() {
      get(this, 'collection').addObject(Ember.Object.create({value: ''}));
    },

    remove(item) {
      get(this, 'collection').removeObject(item);

      Ember.run.debounce(this, this.sendAction, 300);
    },

    onFocusOut() {
      Ember.run.debounce(this, this.sendAction, 300);
    }
  }
});
