module.exports = {
    board_env: "STM32F429VG_btt",
    min_version: "2.1.0",
    meta: {
        stable_name: "biqu-b1-skr-v2-{{marlin_version}}-default-{{uid}}",
        nightly_name: "biqu-b1-skr-v2-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/BIQU/B1/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    }
};
