# proxy2-crack

This is an edited and better version of the Education Queensland proxy.

## 🚀 Hosted URL
The live configuration script is available at:
**`https://idet.vercel.app/proxy.pac`**

---

## 🛠 How to Apply This Proxy

To use this script, you must point your device's network settings to the URL above.

### **Windows 10/11**
1. Open **Settings** > **Network & Internet**.
2. Click on **Proxy** in the left sidebar (or under "Advanced network settings").
3. Find the **Automatic proxy setup** section.
4. Toggle **Use setup script** to **On**.
5. In the **Script address** box, paste: `https://idet.vercel.app/proxy.pac`
6. Click **Save**.

### **macOS**
1. Go to **System Settings** > **Network**.
2. Select your active connection (Wi-Fi or Ethernet) and click **Details...**.
3. Click the **Proxies** tab.
4. Toggle **Automatic Proxy Configuration** to **On**.
5. Paste the URL into the **URL** field.
6. Click **OK** and then **Apply**.

### **iOS (iPhone/iPad)**
1. Open **Settings** > **Wi-Fi**.
2. Tap the **(i)** icon next to your connected network.
3. Scroll to the bottom and tap **Configure Proxy**.
4. Select **Automatic**.
5. Paste the URL into the **URL** field and tap **Save**.

### **Android**
1. Open **Settings** > **Network & internet** > **Internet**.
2. Tap the **Gear icon** next to your Wi-Fi network.
3. Tap the **Edit (Pencil)** icon or look for **Network details**.
4. Expand **Advanced options**.
5. Change **Proxy** from "None" to **Proxy Auto-Config**.
6. Enter the URL and tap **Save**.

---

## 📝 How the Script Works
The `proxy.pac` file contains a JavaScript function `FindProxyForURL(url, host)`. 

- **DIRECT**: Traffic is sent straight to the internet (used for local domains and internal IPs).
- **PROXY**: Traffic is routed through `proxy2.eq.edu.au:80`.
- **Special Rules**: The script includes specific bypasses for `.local` domains, plain hostnames, and specific Xbox/Microsoft asset servers.

---

## ⚠️ Troubleshooting
*   **MIME Type**: If the proxy is ignored, ensure the server (Vercel) is serving the file with the header `Content-Type: application/x-ns-proxy-autoconfig`.
*   **HTTPS**: Ensure the device supports fetching PAC files over HTTPS (most modern browsers do).
*   **Local Access**: If you cannot reach the internet after applying, the proxy server defined in the script (`proxy2.eq.edu.au`) may be unreachable from your current network.
