Ext.define('ContactList.controller.Detail', {
    extend: 'Ext.app.Controller',

    requires: [
        'ContactList.view.Edit'
    ],

    config: {
        refs: {
            //navi: 'contactnavi',
            detail: 'contactdetail',
            editButton: 'button#editButton'
        },
        control: {
            detail : {
                show: 'onShow',
                hide: 'onHide',
            },
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    onShow: function() {
        this.getEditButton().show();
    },

    onHide: function () {
        this.getEditButton().hide();
    },

    /*editData: function() {
        var me = this,
            record = me.getDetail().getRecord(),
            edit = Ext.create('ContactList.view.Edit');

        edit.setRecord(record);
        me.getNavi().push(edit);
    }*/

});
