/**
 * @api {get} /doctors/ Загрузка справочника докторов
 * @apiVersion 0.0.1
 * @apiName GetDoctors
 * @apiGroup Directory
 * @apiPermission none
 *
 * @apiSuccess {Array}      list                        Массив с данными по докторам      
 * @apiSuccess {Number}     list.id                     Айди
 * @apiSuccess {String}     list.doctor_fio             Полное имя врача.
 * @apiSuccess {String}     list.doctor_fio_short       Сокращенное имя врача
 * @apiSuccess {Array}      list.specialization_ids     Айди специализаций - детали в другом справочнике       
 * @apiSuccess {String}     list.avatar                 Ссылка на аватарку
 * @apiSuccess {String}     list.position               Должность
 * @apiSuccess {String}     list.degree                 Степень
 * @apiSuccess {Number}     list.experience             Стаж
 * @apiSuccess {Number}     list.rate                   Рейтинг
 * @apiSuccess {Array}      list.achievements           Айди достижений - детали в другом справочнике
 * @apiSuccess {Number}     list.binding                Айди поликлиники (основная привязка)
 * @apiSuccess {Number}     list.price                  Стоимость приема
 * @apiSuccess {String}     list.description            Общая информация о враче               
 * @apiSuccess {String}     list.employment             Информация чем он занимается в клинике (HTML)                        
 *
 */

 /**
 * @api {get} /user/schedule/specializations Загрузка справочника специализаций
 * @apiVersion 0.0.1
 * @apiName GetSpecializations
 * @apiGroup Directory
 * @apiPermission none
 * @apiDescription метод существует
 *
 * @apiSuccess {Array}      list        Массив с данными по специализациям      
 * @apiSuccess {Number}     list.id     Айди
 * @apiSuccess {String}     list.name   Название специализации                   
 *
 */

 /**
 * @api {get} /achievements/ Загрузка справочника достижений
 * @apiVersion 0.0.1
 * @apiName GetAchievements
 * @apiGroup Directory
 * @apiPermission none
 *
 * @apiSuccess {Array}      list            Массив с данными по достижениям      
 * @apiSuccess {Number}     list.id         Айди
 * @apiSuccess {String}     list.color      Цвет метки                  
 * @apiSuccess {String}     list.name       Название достижения                   
 *
 */