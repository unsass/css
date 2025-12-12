// ============================================================================================= //
//                                            RELEASE                                            //
// ============================================================================================= //

export default {
    branches: [
        'main',
        '+([0-9])?(.{+([0-9]),x}).x',
        {
            'name': 'beta',
            'prerelease': true
        }
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                releaseRules: [
                    {
                        type: 'chore',
                        scope: 'deps',
                        release: 'patch'
                    },
                    {
                        type: 'chore',
                        scope: 'deps-dev',
                        release: false
                    }
                ]
            }
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                presetConfig: {
                    types: [
                        {
                            type: 'feat',
                            section: 'Features'
                        },
                        {
                            type: 'fix',
                            section: 'Bug Fixes'
                        },
                        {
                            type: 'chore',
                            scope: 'deps',
                            section: 'Dependencies'
                        },
                        {
                            type: 'chore',
                            scope: 'deps-dev',
                            hidden: true
                        },
                        {
                            type: 'build',
                            hidden: true
                        },
                        {
                            type: 'ci',
                            hidden: true
                        },
                        {
                            type: 'docs',
                            hidden: true
                        },
                        {
                            type: 'style',
                            hidden: true
                        },
                        {
                            type: 'refactor',
                            hidden: true
                        },
                        {
                            type: 'perf',
                            hidden: true
                        },
                        {
                            type: 'test',
                            hidden: true
                        }
                    ]
                }
            }
        ],
        [
            '@semantic-release/changelog',
            {
                changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.'
            }
        ],
        '@semantic-release/npm',
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                message: 'chore(release): publish version ${nextRelease.version}'
            }
        ]
    ]
};
