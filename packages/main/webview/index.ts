import { window, WebviewPanel, ViewColumn, ExtensionContext, Uri } from 'vscode'
import { app_key } from '../common/types'

export
class Mie_app {
  panel: WebviewPanel
  constructor(
    public key: app_key,
    public title: string,
    public ctx: ExtensionContext,
  ) {
    this.panel = window.createWebviewPanel('mie', title, ViewColumn.One, {
      // 对“本地资源加载”进行限制: https://code.visualstudio.com/api/extension-guides/webview#controlling-access-to-local-resources
      localResourceRoots: [this.join_url()],
      enableScripts: true, // !!!
    })
    this.panel.webview.html = this.render()
  }

  private join_url(path: string = '') {
    return Uri.joinPath(this.ctx.extensionUri, 'webview', path)
  }

  private local_resource(path: string) {
    // 加载本地资源: https://code.visualstudio.com/api/extension-guides/webview#loading-local-content
    return this.panel.webview.asWebviewUri(
      this.join_url(path)
    )
  }

  private render() {
    return `
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${this.title}</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="${this.local_resource(this.key + '.js')}"></script>
      </body>
      </html>
    `
  }
}
