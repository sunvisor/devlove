Ext.define('ContactList.controller.Edit', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            edit: 'contactedit',
            saveButton: 'button#saveButton'
        },
        control: {
            edit: {
                show: 'onShow',
                hide: 'onHide'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    onShow: function() {
        this.getSaveButton().show();
    },

    onHide: function () {
        this.getSaveButton().hide();
    }
});
