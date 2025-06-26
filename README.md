# pandomim

El hareketlerini tanıyan bir video konferans uygulamasının çalışan bir örneği.

## Kurulum ve Çalıştırma

Projeyi yerel olarak çalıştırmak için önce bağımlılıkları yükleyin:

```
yarn
```

Ardından, [`.env.example`](.env.example) dosyasını `.env` olarak kopyalayın ve `.env` içindeki `VITE_ROOM_MANAGER_URL` değerini güncelleyin.

> [!ipucu]
> Çalışan bir `VITE_ROOM_MANAGER_URL` değerini [Fishjam](https://fishjam.io/app) üzerinden edinebilirsiniz.

Son olarak, projeyi başlatmak için:

```sh
yarn dev
```
