/**
 * @api {post} / Загрузка справочника докторов
 * @apiVersion 0.0.1
 * @apiName GetDoctors
 * @apiGroup Directory
 * @apiPermission none
 * @apiDescription Без передачи списка айдишников докторов возвращяет базовые данные по всем докторам, при передаче списка возвращает полные данные для переданных айдишников
 * 
 * @apiParam {String}       token
 * @apiParam {String}       url
 * @apiParam {String[]}     [ids]                          Массив айдишников докторов
 *
 * @apiSuccess {Object[]}   list                            Массив с данными по докторам      
 * @apiSuccess {Number}     list.id                         Айди
 * @apiSuccess {String}     list.doctor_fio                 Полное имя врача.
 * @apiSuccess {String}     list.doctor_fio_short           Сокращенное имя врача
 * @apiSuccess {Number[]}   list.specializations            Айди специализаций - детали в другом справочнике       
 * @apiSuccess {String}     list.avatar                     Ссылка на аватарку
 * @apiSuccess {Number}     list.rate                       Рейтинг
 * @apiSuccess {Number[]}   list.achievements               Айди достижений - детали в другом справочнике
 * @apiSuccess {String}     [list.position]                 Должность
 * @apiSuccess {String}     [list.degree]                   Степень
 * @apiSuccess {Number}     [list.experience]               Стаж
 * @apiSuccess {Number[]}   [list.clinics]                  Массив айдишников клиник в которых работает этот врач
 * @apiSuccess {Number}     [list.price]                    Стоимость приема
 * @apiSuccess {String}     [list.description]              Общая информация о враче               
 * @apiSuccess {InfoBlock[]}     [list.informations]        Массив информационных блоков    
 *                             
 * @apiSuccess (InfoBlock) {String}     [title]             Заголовок информационного блока (опция)                                  
 * @apiSuccess (InfoBlock) {String}     [description]       Описание информационного блока (опция)                                  
 * @apiSuccess (InfoBlock) {String[]}   [list]              Список данных по инфоблоку (строки) (опция)                                                           
 *
 */

 /**
 * @api {post} / Загрузка справочника специализаций
 * @apiVersion 0.0.1
 * @apiName GetSpecializations
 * @apiGroup Directory
 * @apiPermission none
 * @apiDescription метод существует
 *
 * @apiParam {String}        token
 * @apiParam {String='user/schedule/specializations'}   url
 * 
 * @apiSuccess {Object[]}   list        Массив с данными по специализациям      
 * @apiSuccess {Number}     list.id     Айди
 * @apiSuccess {String}     list.name   Название специализации                   
 *
 */

 /**
 * @api {post} / Загрузка справочника достижений
 * @apiVersion 0.0.1
 * @apiName GetAchievements
 * @apiGroup Directory
 * @apiPermission none
 * 
 * @apiParam {String}   token
 * @apiParam {String}   url
 *
 * @apiSuccess {Object[]}   list                Массив с данными по достижениям      
 * @apiSuccess {Number}     list.id             Айди
 * @apiSuccess {String}     list.color          Цвет метки                  
 * @apiSuccess {String}     list.name           Название достижения                   
 * @apiSuccess {String}     list.descriprion    Описание достижения                   
 *
 */