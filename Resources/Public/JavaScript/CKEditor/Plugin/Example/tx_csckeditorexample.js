/*jslint browser: true, this: true, multivar: true, white: true, devel: true*/
/*global $, $$, jquery, window, document, require, CKEDITOR*/

/**
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

(function() {
	'use strict';

	var $;
	require(['jquery'], function (jquery) {
		$ = jquery;
	});

	CKEDITOR.plugins.add('tx_csckeditorexample', {
		icons: 'reformat-example',
		init: function( editor ) {
			editor.addCommand( 'reformatExample', {
				exec: function( editor ) {
					var boldRegex = /\*([^\*]+)\*/gm;
					var italicRegex = /_([^_]+)_/gm;

					editor.focus();
					editor.document.$.execCommand( 'SelectAll', false, null );
					var parsedData = editor.getData();

					parsedData = parsedData.replace(boldRegex, '<b>$1</b>');
					parsedData = parsedData.replace(italicRegex, '<i>$1</i>');
					editor.setData( parsedData );
				}
			});
			editor.ui.addButton( 'ReformatExample', {
				label: 'Reformat Text',
				command: 'reformatExample',
				toolbar: 'editing',
				icon: this.path + 'icons/reformat-example.png',
			});
		}
	});
}());