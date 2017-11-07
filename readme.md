

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

### **Dosya yükleme komutları**

**Uzak Dosyaları Yerel Sisteme Aktarma**

```bash
get remoteFile

Fetching /home/demouser/remoteFile to remoteFile
/home/demouser/remoteFile                       100%   37KB  36.8KB/s   00:01

get remoteFile localFile
get -r someDirectory
get -Pr someDirectory
```
**Yerel Dosyaları Uzak Sistemde Aktarma**
```bash
put localFile

Uploading localFile to /home/demouser/localFile
localFile                                     100% 7607     7.4KB/s   00:00

put -r localDirectory

df -h
    Size     Used    Avail   (root)    %Capacity
  19.9GB   1016MB   17.9GB   18.9GB           4%

!
df -h
  Filesystem      Size   Used  Avail Capacity  Mounted on
  /dev/disk0s2   595Gi   52Gi  544Gi     9%    /
  devfs          181Ki  181Ki    0Bi   100%    /dev
  map -hosts       0Bi    0Bi    0Bi   100%    /net
  map auto_home    0Bi    0Bi    0Bi   100%    /home  

exit
```
