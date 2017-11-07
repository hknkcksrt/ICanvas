﻿

# **ICanvas Project**

Selam Projemin adı ICanvas Project.

**Projeyi gerçekleştirme amaçlarım;**
1. *Web site tasarımını, uygulayarak daha kolay öğrenmeye çalışmak*
2. *[Frontend](https://en.wikipedia.org/wiki/Front-end_web_development/) programcılığına giriş yapmak.*
3. *Tasarımı yaparken baz alacağım [site](http://websites.envatousercontent.com/designs/total-construct/2dfccd53-4996-40c4-b0ef-e0633a57ae51/preview) bu olup tasarımı tamamladığımda projemde, bu sitedeki benzer fonksiyon ve özellikler mevcut olacaktır.*

**Sitenin sunucuya deploy edilme aşamaları**
------
4 temel bölümden oluşmaktadır.

* Alan adı bulma
* Barındırma hizmeti bulma
* SFTP (Secure File Transfer Protocol) ile dosya yükleme
* Sunucu tarafındaki uygulamaları dağıtma

### **Alan Adı Bulma;**
-----

Bir alan adı sahibi olmak gerekiyor.(uzantıya bağlı olarak yılda yaklaşık 10$-80$ arasında değişir.)
Artık bir alan adı satın aldınız.(Tabii önceden kullanılmamış bir alan adı bulabildiyseniz.)

### **Barındırma Hizmeti Bulma;**
-----

Birisinin tarayıcınıza alan adınızı her yazışında sunucunuzda bulunan web sitesi dosyaları yüklenecek şekilde bir web sunucusuyla ilişkilendirmeniz gerekiyor.
Bir ev bilgisayarı kullanabilir ve evinizdeki internet bağlantısından dosyalar sunabilirsiniz, ancak daha sonra tüm bant genişliği için kendiniz ödeme yapmanızın yanı sıra bilgisayarı kurmanız ve bakım yapmanız gerekecekti.
Alternatif olarak, genellikle daha pratik ve uygun maliyetli bir barındırma hizmetinden bir web sunucusu ve bant genişliği kiralamak için ödeme yapabilirsiniz.
Bir barındırma hizmetinden bir sunucu kiralarken, sitenize erişebilmeniz için bir yol sunar, dosyalarınızı yükleyebilir ve sitenizi ayakta tutmak için özel komut dosyaları kurabilirsiniz.

### **SFTP (Secure File Transfer Protocol) ile Dosya Yükleme;**
-----

Varsayılan olarak, SFTP, kimlik doğrulaması yapmak ve güvenli bir bağlantı oluşturmak için SSH protokolünü kullanır. Bu nedenle, SSH'de bulunan aynı kimlik doğrulama yöntemleri kullanılabilir.

Şifreleri varsayılan olarak kullanmak ve ayarlamak kolay olmasına rağmen, SSH anahtarları oluşturmanızı ve genel anahtarınızı, erişmeniz gereken herhangi bir sisteme aktarmanız önerilir. Bu çok daha güvenlidir ve uzun vadede size zaman kazandırabilir.

**Dosya yükleme komutları**

```bash
  get remoteFile
```
