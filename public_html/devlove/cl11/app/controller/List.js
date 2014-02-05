Ext.define('ContactList.controller.List', {
    extend: 'Ext.app.Controller',

    requires: [
        'ContactList.view.Detail'
    ],

    config: {
        refs: {
            navi: 'contactnavi',
            addButton: 'button#addButton'
        },
        control: {
            contactlist: {
                disclose: 'onDisclose',
                show: 'onShow',
                hide: 'onHide'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    onDisclose: function(list, record) {
        var me = this,
        detail = Ext.create('ContactList.view.Detail');

        detail.setRecord(record);
        me.getNavi().push(detail);
    },

    onShow: function() {
        this.getAddButton().show();
    },

    onHide: function () {
        this.getAddButton().hide();
    }
});
