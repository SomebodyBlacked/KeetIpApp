{ pkgs, ... }: {
  channel = "stable-24.05";
  services.postgres.enable = true;
  services.postgres.package = pkgs.postgresql_15;
  packages = [
    pkgs.nodejs_20
  ];
  idx = {
    extensions = [
      "zhuangtongfa.material-theme"
      "rangav.vscode-thunder-client"
      "esbenp.prettier-vscode"
      "bradlc.vscode-tailwindcss"
      "vscode-icons-team.vscode-icons"
    ];
    workspace = {
      onCreate = {
        npm-install = "npm install --prefix ./frontend";
      };
    };
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
