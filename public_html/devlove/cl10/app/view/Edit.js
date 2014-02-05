Ext.define('ContactList.view.Edit', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.field.Email'
    ],

    alias: 'widget.contactedit',

    config: {
        items: [{
            xtype: 'fieldset',
            items: [{
                xtype: 'textfield',
                label: '姓',
                name: 'last_name'
            }, {
                xtype: 'textfield',
                label: '名',
                name: 'first_name'
            }, {
                xtype: 'textfield',
                label: 'セイ',
                name: 'last_kana'
            }, {
                xtype: 'textfield',
                label: 'メイ',
                name: 'first_kana'
            }]
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'datepickerfield',
                label: '誕生日',
                dateFormat: 'Y-m-d',
                name: 'birthday',
                picker: {
                    yearFrom: 1920
                }
            }, {
                xtype: 'selectfield',
                label: '性別',
                name: 'gender',
                options: [{
                    text: '男', value: '男'
                }, {
                    text: '女', value: '女'
                }]
            }]
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'emailfield',
                label: 'メール',
                name: 'email'
            }, {
                xtype: 'textfield',
                label: '携帯電話',
                // 電話番号用のtouch独自コントロールはないので
                // componentコンフィグにtype: 'tel' を指定
                component: {
                    type: 'tel'
                },
                name: 'phone'
            }]
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'textfield',
                label: '都道府県',
                name: 'pref'
            }, {
                xtype: 'textfield',
                label: '市区町村',
                name: 'add1'
            }, {
                xtype: 'textfield',
                label: '町名',
                name: 'add2'
            }, {
                xtype: 'textfield',
                label: '番地',
                name: 'add3'
            }, {
                xtype: 'textfield',
                label: '建物等',
                name: 'add4'
            }]
        }]
    }
});

