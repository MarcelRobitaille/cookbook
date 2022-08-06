OC.L10N.register(
    "cookbook",
    {
    "No image with the matching MIME type was found on the server." : "Sunucu üzerinde eşleşen MIME türünde bir görsel bulunamadı. ",
    "Recipe with ID %d was not found in database." : "%d kodlu yemek tarifi veritabanında bulunamadı.",
    "Downloading of a file failed returned the following error message: %s" : "Bir dosya şu hata iletisi ile indirilemedi: %s",
    "No content encoding was detected in the content." : "İçerikte bir içerik kodlayıcı bulunamadı.",
    "The given image for the recipe %s cannot be parsed. Aborting and skipping it." : "%s tarifi için belirtilen görsel işlenemedi. Vazgeçilip atlanıyor.",
    "No valid recipe was left after heuristics of recipe %s." : "%s tarifi için buluşsal taramadan sonra bir tarif bulunamadı.",
    "Heuristics failed for image extraction of recipe %s." : "%s tarifi için buluşsal tarama görseli ayıklamayadı.",
    "Could not guess image URL as no recipe URL was found." : "Tarif adresi bulunamadığından görsel adresi öngörülemedi.",
    "Could not guess image URL scheme from recipe URL %s" : "%s tarif adresinden görsel adresi öngörülemedi",
    "Could not parse recipe ingredients. It is no array." : "Bir dizi olmadığından, tarifin içindekiler işlenemedi.",
    "Could not parse recipe instructions as they are no array." : "Bir dizi olmadığından, tarifin yapılışı işlenemedi. ",
    "Cannot parse recipe: Unknown object found during flattening of instructions." : "Tarif işlenemedi. Yapılışı düzeltilirken bilinmeyen bir nesne ile karşılaşıldı.",
    "Did not find any p or li entries in the raw string of the instructions." : "Yapılış dizgesinin ham halinde herhangi bir p ya da li kaydı bulunamadı.",
    "Could not parse the keywords for recipe {recipe}." : "{recipe} tarifinin anahtar sözcükleri işlenemedi.",
    "Could not parse the nutrition information successfully for recipe {name}." : "{name} tarifinin beslenme değerleri işlenemedi.",
    "Using heuristics to parse the \"recipeYield\" field representing the number of servings of recipe {name}." : "{name} tarifinin porsiyon sayısını gösteren \"recipeYield\" alanının işlemek için buluşsal tarama kullanılıyor.",
    "_Only a single number was found in the \"recipeYield\" field. Using it as number of servings._::_There are %n numbers found in the \"recipeYield\" field. Using the highest number found as number of servings._" : ["\"recipeYield\" alanında tek bir sayı bulundu. Porsiyon sayısı olarak bulunan en yüksek sayı kullanılıyor.","\"recipeYield\" alanında %n birkaç sayı bulundu. Porsiyon sayısı olarak bulunan en yüksek sayı kullanılıyor."],
    "Could not parse \"recipeYield\" field. Falling back to 1 serving." : "\"recipeYield\" alanı işlenemedi. 1 porsiyon olduğu varsayılıyor.",
    "Could not parse recipe tools. It is no array." : "Bir dizi olmadığından, tarif araçları işlenemedi.",
    "Could not find recipe in HTML code." : "HTML kodunda yemek tarifi bulunamadı.",
    "JSON cannot be decoded." : "JSON kodu çözülemedi.",
    "No recipe was found." : "Herhangi bir yemek tarifi bulunamadı!",
    "Parsing of HTML failed." : "HTML kodu işlenemedi.",
    "Unsupported error level during parsing of XML output." : "XML çıktısı işlenirken desteklenmeyen bir hata düzeyi ile karşılaşıldı.",
    "_Warning %u occurred while parsing %s._::_Warning %u occurred %n times while parsing %s._" : ["Uyarı: %s işlenirken %u ile karşılaşıldı.","Uyarı: %s işlenirken %u ile %n kez karşılaşıldı."],
    "_Error %u occurred while parsing %s._::_Error %u occurred %n times while parsing %s._" : ["Hata: %s işlenirken %u ile karşılaşıldı.","Hata: %s işlenirken %u ile %n kez karşılaşıldı."],
    "_Fatal error %u occurred while parsing %s._::_Fatal error %u occurred %n times while parsing %s._" : ["Ciddi hata: %s işlenirken %u ile karşılaşıldı.","Ciddi hata: %s işlenirken %u ile %n kez karşılaşıldı."],
    "First time it occurred in line %u and column %u" : "İlk kez %u satırında %u sütununda karşılaşıldı",
    "Could not parse duration {duration}" : "{duration} süresi işlenemedi",
    "The recipe has already an image file. Cannot create a new one." : "Yemek tarifinin zaten bir görsel dosyası var. Yeni bir dosya oluşturulamadı.",
    "There is no primary image for the recipe present." : "Yemek tarifinin birincil görseli yok.",
    "Cannot parse non-POST multipart encoding. This is a bug." : "POST olmayan çok parçalı kodlama işlenemedi. Bu bir hata olmalı. Lütfen bize bildirin.",
    "Cannot detect type of transmitted data. This is a bug, please report it." : "Aktarılan verinin türü algılanamadı. Bu bir hata olmalı. Lütfen bize bildirin.",
    "Invalid URL-encoded string found. Please report a bug." : "Adres kodlamalı dizge bulundu. Lütfen bize hata olarak bildirin.",
    "The user is not logged in. No user configuration can be obtained." : "Kullanıcı oturum açmamış. Hehrangi bir kullanıcı yapılandırması alınamadı.",
    "Recipes" : "Yemek tarifleri",
    "The user folder cannot be created due to missing permissions." : "İzinler eksik olduğundan kullanıcı klasörü oluşturulamadı.",
    "The configured user folder is a file." : "Yapılandırılmış kullanıcı klasörü bir dosya.",
    "User cannot create recipe folder" : "Kullanıcı yemek tarifi klasörü ekleyemez",
    "in %s" : "%s içinde",
    "The JSON file in the folder with ID %d does not have a valid name." : "%d kodlu klasördeki JSON dosyasının adı geçersiz.",
    "Could not parse URL" : "Adres işlenemedi",
    "Exception while downloading recipe from %s." : "Yemek tarifi %s üzerinden indirilirken bir sorun çıktı.",
    "Download from %s failed as HTTP status code %d is not in expected range." : "%s, %d beklenen aralıkta değil HTTP durum koduyla indirilemedi. ",
    "Could not find a valid encoding when parsing %s." : "%s işlenirken geçerli bir kodlama bulunamadı.",
    "No parser found for the given import." : "Belirtilen içe aktarma için bir işleyici bulunamadı.",
    "No recipe name was given. A unique name is required to store the recipe." : "Yemek tarifi adı belirtilmemiş. Yemekl tarifini kaydetmek için eşsiz bir ad vermelisiniz.",
    "Another recipe with that name already exists" : "Aynı adlı bir yemek tarifi zaten var",
    "No recipe data found. This is a bug" : "Herhangi bir yemek tarifi verisi bulunamadı. Bu bir hata.",
    "Recipe with ID %d not found." : "%d kodlu yemek tarifi bulunamadı.",
    "Image size \"%s\" is not recognized." : "\"%s\" görsel boyutu anlaşılamadı.",
    "The full-sized image is not a thumbnail." : "Tam boyutlu görsel bir küçük görsel değil.",
    "The thumbnail type %d is not known." : "%d küçük görsel türü bilinmiyor.",
    "Cookbook" : "Yemek kitabı",
    "An integrated cookbook using schema.org JSON files as recipes" : "Yemek tarifleri için schema.org JSON dosyaları kullanan bütünleşik bir yemek kitabı",
    "A library for all your recipes. It uses JSON files following the schema.org recipe format. To add a recipe to the collection, you can paste in the URL of the recipe, and the provided web page will be parsed and downloaded to whichever folder you specify in the app settings." : "Tüm yemek tarifleriniz için bir kitaplık. schema.org yemek tarifi biçimine uygun JSON dosyalarını kullanır. Derlemeye bir yemek tarifi eklemek için yemek tarifinin adresini yapıştırabilirsiniz. Yemek tarifinin bulunduğu web sayfası işlenerek, yemek tarifi uygulama ayarlarında belirttiğiniz klasöre indirilir.",
    "Editing recipe" : "Yemek tarifini düzenleme",
    "Viewing recipe" : "Yemek tarifini görüntüleme",
    "All recipes" : "Tüm yemek tarifleri",
    "Loading app" : "Uygulama yükleniyor",
    "Loading recipe" : "Yemek tarifi yükleniyor",
    "Recipe not found" : "Yemek tarifi bulunamadı",
    "Page not found" : "Sayfa bulunamadı",
    "Creating new recipe" : "Yeni yemek tarifi ekleme",
    "Edit" : "Düzenle",
    "Save" : "Kaydet",
    "Search" : "Arama",
    "Reload recipe" : "Yemek tarifini yeniden yükle",
    "Print recipe" : "Yemek tarifini yazdır",
    "Delete recipe" : "Yemek tarifini sil",
    "Filter" : "Süzgeç",
    "Category" : "Kategori",
    "Recipe name" : "Yemek tarifi adı",
    "Tags" : "Etiketler",
    "Search for recipes" : "Yemek tarifi arama",
    "Are you sure you want to delete this recipe?" : "Bu yemek tarifini silmek istediğinize emin misiniz?",
    "Delete failed" : "Silinemedi",
    "Cannot access recipe folder." : "Yemek tarifi klasörüne erişilemedi.",
    "You are logged in with a guest account. Therefore, you are not allowed to generate arbitrary files and folders on this Nextcloud instance. To be able to use the Cookbook app as a guest, you need to specify a folder where all recipes are stored. You will need write permission to this folder." : "Bir konuk hesabı ile oturum açmışsınız. Bu nedenle, bu Nextcloud kopyasına istediğiniz şekilde dosya ve klasör ekleyemezsiniz. Yemek kitabı uygulamasını konuk olarak kullanabilmek için, tüm tariflerin kaydedileceği bir klasör belirlemelisiniz. Bu klasöre yazma izninizin olması gerekir.",
    "Select recipe folder" : "Yemek tarifi klasörünü seçin",
    "Path to your recipe collection" : "Yemek tarifi derlemenizin yolu",
    "Create recipe" : "Yemek tarifi ekle",
    "Uncategorized recipes" : "Kategorisiz tarifler",
    "Categories" : "Kategoriler",
    "Rename" : "Yeniden adlandır",
    "Enter new category name" : "Yeni kategorinin adını yazın",
    "Download recipe from URL" : "Yemek tarifini adresten indir",
    "Toggle editing" : "Düzenlemeyi aç/kapat",
    "Failed to load category {category} recipes" : "{category} kategorisindeki tarifler yüklenemedi",
    "The server reported an error. Please check." : "Sunucu bir sorun bildirdi. Lütfen denetleyin.",
    "Could not query the server. This might be a network problem." : "Sunucu sorgulanamadı. Bir ağ sorunu olabilir.",
    "Loading category recipes …" : "Kategorinin tarifleri yükleniyor …",
    "Failed to fetch categories" : "Kategoriler alınamadı",
    "Rescan library" : "Kitaplığı yeniden tara",
    "Please pick a folder" : "Lütfen bir klasör seçin",
    "Recipe folder" : "Yemek tarifi klasörü",
    "Update interval in minutes" : "Dakika cinsinden güncelleme sıklığı",
    "Print image with recipe" : "Tarif ile görsel de yazdırılsın",
    "Show keyword cloud in recipe lists" : "Yemek tarifleri listesinde anahtar sözcük bulutu görüntülensin",
    "Could not set preference for image printing" : "Görsel yazdırma ayarı yapılamadı",
    "Could not set recipe update interval to {interval}" : "Yemek tarifi güncelleme sıklığı {interval} olarak ayarlanamadı",
    "Could not set recipe folder to {path}" : "Yemek tarifi derleme klasörü {path} olarak ayarlanamadı",
    "Loading config failed" : "Yapılandırma yüklenemedi",
    "Enter URL or select from your Nextcloud instance on the right" : "Adresi yazın ya da sağdan Nextcloud kopyanızdan seçin",
    "Pick a local image" : "Bir yerel görsel seçin",
    "Path to your recipe image" : "Tarif görselinin yolu",
    "Move entry up" : "Kaydı yukarı taşı",
    "Move entry down" : "Kaydı aşağı taşı",
    "Insert entry above" : "Aşağı kayıt ekle",
    "Delete entry" : "Kaydı sil",
    "Add" : "Ekle",
    "Close" : "Kapat",
    "The page was not found" : "Sayfa bulunamadı",
    "Name" : "Ad",
    "Description" : "Açıklama",
    "URL" : "Adres",
    "Image" : "Görsel",
    "Preparation time (hours:minutes)" : "Hazırlama süresi (saat:dakika)",
    "Cooking time (hours:minutes)" : "Pişirme süresi (saat:dakika)",
    "Total time (hours:minutes)" : "Toplam süre (saat:dakika)",
    "Choose category" : "Kategori seçin",
    "Keywords" : "Anahtar sözcükler",
    "Choose keywords" : "Anahtar sözcükleri seçin",
    "Servings" : "Kaç kişilik",
    "Toggle if the number of servings is present" : "Porsiyon sayısı varsa değiştirin",
    "Nutrition Information" : "Beslenme bilgileri",
    "Pick option" : "Seçin",
    "Tools" : "Araçlar",
    "Ingredients" : "Malzemeler",
    "Instructions" : "Nasıl yapılır",
    "Calories" : "Kalori",
    "E.g.: 450 kcal (amount & unit)" : "Mrnek 450 kcal (miktar ve birim)",
    "Carbohydrate content" : "Karbonhidrat miktarı",
    "E.g.: 2 g (amount & unit)" : "Örnek: 2 g (miktar ve birim)",
    "Cholesterol content" : "Kolesterol miktarı",
    "Fat content" : "Yağ miktarı",
    "Fiber content" : "Lif miktarı",
    "Protein content" : "Protein miktarı",
    "Saturated-fat content" : "Doymuş yağ miktarı",
    "Serving size" : "Porsiyon sayısı",
    "Enter serving size (volume or mass)" : "Porsiyon sayısını yazın (hacim ya da ağırlık)",
    "Sodium content" : "Sodyum miktarı",
    "Sugar content" : "Şeker miktarı",
    "Trans-fat content" : "Trans yağ miktarı",
    "Unsaturated-fat content" : "Doymamış yağ miktarı",
    "You have unsaved changes! Do you still want to leave?" : "Kaydedilmemiş değişiklikleriniz var. Gene de ayrılmak istiyor musunuz?",
    "Failed to fetch keywords" : "Anahtar sözcükler alınamadı",
    "Loading recipe failed" : "Tarif yüklenemedi",
    "Unknown answer returned from server. See logs." : "Sunucudan bilinmeyen bir yanıt alındı. Günlüklere bakabilirsiniz.",
    "No answer for request was received." : "İsteğe bir yanıt verilmedi.",
    "Could not start request to save recipe." : "Yemek tarifini kaydetme isteği başlatılamadı.",
    "Recipe image" : "Tarif görseli",
    "Select order" : "Sıralamayı seçin",
    "Creation date" : "Eklenme tarihi",
    "Modification date" : "Son değişiklik tarihi",
    "Toggle keyword" : "Anahtar sözcüğü değiştir",
    "Keyword not contained in visible recipes" : "Anahtar sözcük görünen tariflerde kullanılmamış",
    "Toggle keyword area size" : "Anahtar sözcük alanı boyutunu değiştir",
    "Order keywords by number of recipes" : "Anahtar sözcükler yemek tarifi sayısına göre sıralansın",
    "Order keywords alphabetically" : "Anahtar sözcükler alfabetik olarak sıralansın",
    "Cooking time is up!" : "Pişirme zamanı doldu!",
    "Search recipes with this keyword" : "Bu anahtar sözcüğün kullanıldığı tarifleri ara",
    "Date created" : "Eklenme tarihi",
    "Last modified" : "Güncellenme tarihi",
    "Preparation time (H:MM)" : "Hazırlama süresi (S:DD)",
    "Cooking time (H:MM)" : "Pişirme süresi (S:DD)",
    "Total time (H:MM)" : "Toplam süre (S:DD)",
    "Serving Size" : "Porsiyon boyutu",
    "Energy" : "Enerji",
    "Sugar" : "Şeker",
    "Carbohydrate" : "Karbonhidrat",
    "Cholesterol" : "Kolesterol",
    "Fiber" : "Lif",
    "Protein" : "Protein",
    "Sodium" : "Sodyum",
    "Fat total" : "Toplam yağ",
    "Saturated Fat" : "Doymuş Yağ",
    "Unsaturated Fat" : "Doymamış yağ",
    "Trans Fat" : "Trans yağ",
    "Source" : "Kaynak",
    "Loading…" : "Yükleniyor…",
    "Failed to load recipes with keywords: {tags}" : "Şu anahtar sözcüklerin bulunduğu tarifler yüklenemedi: {tags}",
    "Failed to load search results" : "Arama sonuçları yüklenemedi"
},
"nplurals=2; plural=(n > 1);");
