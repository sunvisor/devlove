Ext.define('ContactList.controller.Navi', {
    extend: 'Ext.app.Controller',

    requires: [
        'ContactList.view.Edit'
    ],

    config: {
        refs: {
            navi: 'contactnavi',
            addButton: 'button#addButton'
        },
        control: {
            addButton: {
                tap: 'onTapAddButton'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    onTapAddButton: function() {
        var me = this,
            form = Ext.create('ContactList.view.Edit');

        me.getNavi().push(form);
    }
});
