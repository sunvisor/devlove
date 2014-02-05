Ext.define('ContactList.controller.Navi', {
    extend: 'Ext.app.Controller',

    requires: [
        'ContactList.view.Edit'
    ],

    config: {
        refs: {
            navi: 'contactnavi',
            detail: 'contactdetail',
            edit: 'contactedit',
            addButton: 'button#addButton',
            editButton: 'button#editButton',
            saveButton: 'button#saveButton',

        },
        control: {
            addButton: {
                tap: 'onTapAddButton'
            },
            editButton: {
                tap: 'onTapEditButton'
            },
            saveButton: {
                tap: 'onTapSaveButton'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },

    onTapAddButton: function() {
        var me = this,
            record = Ext.create('ContactList.model.Contact'),
            form = Ext.create('ContactList.view.Edit');

        form.setRecord(record);
        me.getNavi().push(form);
    },

    onTapEditButton: function() {
        var me = this,
            record = me.getDetail().getRecord(),
            edit = Ext.create('ContactList.view.Edit');

        edit.setRecord(record);
        me.getNavi().push(edit);
    },

    onTapSaveButton: function() {
        var me = this,
            edit = me.getEdit(),
            record = edit.getRecord(),
            data = record.getValues(),
            store = Ext.getStore('Contacts');

        /*record.set(data);
        if( record.phantom ) {
            store.add(record);
        }*/
        edit.submit({
            url: 'savedata.php',
            method: 'post',
            waitMsg: {
                xtype: 'loadmask',
                message: '送信中です'
            },

            success: function(form, xhr) {
                store.reload();
            },
            failure: function(form, xhr) {
                Ext.Msg.alert(xhr.responseText)
            }
        })
        me.getNavi().pop();
    }
});
