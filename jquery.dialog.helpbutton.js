/*
 * jQuery UI Dialog Titlebar Help button Plugin v1.0 JS
 * https://github.com/miyabis/jquery.dialog.helpbutton
 *
 * Copyright 2012, MiYABiS
 * Distributed under the [MIT License][mit].
 * http://www.opensource.org/licenses/mit-license.php
 */
(function ($) {
    var _init = $.ui.dialog.prototype._init;

    $.ui.dialog.prototype._init = function () {
        var self = this;
        _init.apply(this, arguments);

        if (!self.options.help) {
            return false;
        }

        if (!self.options.helpTitle) {
            self.options.helpTitle = "HelpPage";
        }

        uiDialogTitlebar = this.uiDialogTitlebar;
        uiDialogTitlebar.append('<a href="#" class="dialog-help ui-dialog-titlebar-help"><span class="ui-icon ui-icon-help"></span></a>');

        // Button
        this.uiDialogTitlebarHelp = $('.dialog-help', uiDialogTitlebar).hover(function () {
            $(this).addClass('ui-state-hover');
        }, function () {
            $(this).removeClass('ui-state-hover');
        }).click(function () {
            window.open(self.options.help, self.options.helpTitle);
            return false;
        });
    };
})(jQuery); 
