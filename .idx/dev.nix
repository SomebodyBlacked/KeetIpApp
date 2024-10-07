{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
  ];
  idx = {
    extensions = [
      "castrogusttavo.symbols"
      "zhuangtongfa.material-theme"
      "rangav.vscode-thunder-client"
      "esbenp.prettier-vscode"
    ];
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "npm" "run" "dev" "--prefix" "./frontend" "--" "--port" "$PORT" ];
          manager = "web";
        };
      };
    };
  };
}
