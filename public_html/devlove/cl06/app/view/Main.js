Ext.define('ContactList.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'ContactList.view.List'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Contact',
                iconCls: 'list',
                xtype: 'contactlist'
            }, {
                title: 'About',
                iconCls: 'info',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'DevLove関西'
                    }
                ],

                styleHtmlContent: true,

                html: [
                    'このアプリは',
                    '<strong>DevLove関西</strong>',
                    'でのサンプルアプリです'
                ].join("")
            }
        ]
    }
});
