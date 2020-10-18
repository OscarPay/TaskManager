window.PLATZI = {
  init() {
    console.log('Make with love by Platzi');
    PLATZI.misc.selectizeByScope('body');
  },
  tasks: {
    index: {
      setup() {
        console.log('In the index page');
      }
    },
    form: {
      setup() {
        $('.participants').on('cocoon:before-insert', (e, insertedItem, originalEvent) => {
          PLATZI.misc.selectizeByScope(insertedItem);
        })
      }
    }
  },
  misc: {
    selectizeByScope(selector) {
      return $(selector).find('.selectize').each(function(i, el) {
        $(el).selectize();
      });
    }
  }
};

$(document).on('turbolinks:load', () => PLATZI.init());