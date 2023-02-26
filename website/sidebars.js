module.exports = {
  docs: [
    {
      type: "category",
      label: "💡 Getting Started",
      collapsed: false,
      items: [
        "introduction",
        {
          type: "category",
          label: "🚀 Get started",
          collapsed: false,
          items: [
            {
              type: "category",
              label: "📦 Installation",
              collapsed: false,
              items: [
                "installation/windows",
                "installation/macos",
                "installation/linux",
              ],
            },
            "installation/fonts",
            "installation/prompt",
            "installation/customize",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "⚙️ Configuration",
      items: [
        "configuration/overview",
        "configuration/block",
        "configuration/segment",
        "configuration/sample",
        "configuration/title",
        "configuration/colors",
        "configuration/templates",
        "configuration/secondary-prompt",
        "configuration/debug-prompt",
        "configuration/transient",
        "configuration/line-error",
        "configuration/tooltips",
      ],
    },
    {
      type: "category",
      label: "🌟 Segments",
      collapsed: true,
      items: [
        "segments/angular",
        "segments/aws",
        "segments/az",
        "segments/azfunc",
        "segments/battery",
        "segments/brewfather",
        "segments/buf",
        "segments/cds",
        "segments/cf",
        "segments/cftarget",
        "segments/cmake",
        "segments/command",
        "segments/connection",
        "segments/crystal",
        "segments/dart",
        "segments/deno",
        "segments/dotnet",
        "segments/elixir",
        "segments/executiontime",
        "segments/exit",
        "segments/flutter",
        "segments/fossil",
        "segments/gcp",
        "segments/git",
        "segments/gitversion",
        "segments/golang",
        "segments/haskell",
        "segments/ipify",
        "segments/iterm",
        "segments/java",
        "segments/julia",
        "segments/kotlin",
        "segments/kubectl",
        "segments/lua",
        "segments/mercurial",
        "segments/nbgv",
        "segments/nightscout",
        "segments/node",
        "segments/npm",
        "segments/nx",
        "segments/os",
        "segments/owm",
        "segments/path",
        "segments/perl",
        "segments/php",
        "segments/plastic",
        "segments/project",
        "segments/python",
        "segments/r",
        "segments/root",
        "segments/ruby",
        "segments/rust",
        "segments/sapling",
        "segments/session",
        "segments/shell",
        "segments/spotify",
        "segments/strava",
        "segments/svn",
        "segments/swift",
        "segments/sysinfo",
        "segments/terraform",
        "segments/text",
        "segments/time",
        "segments/ui5tooling",
        "segments/unity",
        "segments/vala",
        "segments/wakatime",
        "segments/withings",
        "segments/winreg",
        "segments/xmake",
        "segments/ytm",
      ],
    },
    {
      type: "category",
      label: "🙋🏾‍♀️ Contributing",
      collapsed: true,
      items: [
        "contributing/started",
        "contributing/segment",
        "contributing/git",
        "contributing/plastic",
      ],
    },
    "themes",
    "share",
    "faq",
    "migrating",
    "contributors",
  ],
};
