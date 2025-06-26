# pandomim

Bu repo el hareketlerini tanıyan bir video konferans uygulamasının tam çalışan bir örneğini içerir.

## Kurulum ve Çalıştırma

Projeyi yerel olarak çalıştırmak için önce bağımlılıkları yükleyin:

```
yarn
```

Ardından, [`.env.example`](.env.example) dosyasını `.env` olarak kopyalayın ve `.env` içindeki `VITE_ROOM_MANAGER_URL` değerini güncelleyin.

> [!ipucu]
> Çalışan bir `VITE_ROOM_MANAGER_URL` değerini [Fishjam](https://fishjam.io/app) üzerinden veya [room-manager](https://github.com/fishjam-cloud/js-server-sdk/tree/main/examples/room-manager) projesini yerelinizde çalıştırarak edinebilirsiniz.

Son olarak, projeyi başlatmak için:

```sh
yarn dev
```
