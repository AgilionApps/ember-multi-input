import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('multi-input', 'Integration | Component | multi input', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{multi-input}}`);

  assert.equal(this.$('div:first button:first').text().trim(), 'Remove');
  assert.equal(this.$('div:last button').text().trim(), 'Add');
});
