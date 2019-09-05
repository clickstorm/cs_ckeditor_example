<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Example plugin for the CKEditor',
    'description' => '',
    'category' => 'plugin',
    'author' => 'Marc Hirdes',
    'author_email' => 'hirdes@clickstorm.de',
    'state' => 'alpha',
    'uploadfolder' => 1,
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-9.5.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
