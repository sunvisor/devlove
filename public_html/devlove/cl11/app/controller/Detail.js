Ext.define('ContactList.controller.Detail', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            detail: 'contactdetail',
            editButton: 'button#editButton'
        },
        control: {
            detail : {
                show: 'onShow',
                hide: 'onHide'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    onShow: function() {
        me.getEditButton().show();
    },

    onHide: function () {
        this.getEditButton().hide();
    }

});
