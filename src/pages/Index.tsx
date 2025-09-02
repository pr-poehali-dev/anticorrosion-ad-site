import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Полная антикоррозийная обработка",
      description: "Комплексная защита кузова от коррозии с использованием современных материалов",
      price: "от 15 000 ₽",
      icon: "Shield"
    },
    {
      title: "Обработка скрытых полостей",
      description: "Профессиональная обработка труднодоступных мест кузова автомобиля",
      price: "от 8 000 ₽",
      icon: "Wrench"
    },
    {
      title: "Защита днища",
      description: "Надежная защита днища от воздействия соли и реагентов",
      price: "от 12 000 ₽",
      icon: "Car"
    },
    {
      title: "Обработка арок",
      description: "Защита колесных арок от камней, песка и коррозии",
      price: "от 6 000 ₽",
      icon: "Settings"
    }
  ];

  const advantages = [
    {
      title: "15 лет гарантии",
      description: "Официальная гарантия на все виды работ",
      icon: "Award"
    },
    {
      title: "Сертифицированные материалы",
      description: "Используем только проверенные составы",
      icon: "CheckCircle"
    },
    {
      title: "Опытные мастера",
      description: "Более 10 лет опыта в сфере защиты авто",
      icon: "Users"
    },
    {
      title: "Современное оборудование",
      description: "Профессиональные инструменты и технологии",
      icon: "Zap"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Диагностика",
      description: "Осмотр автомобиля и оценка состояния кузова"
    },
    {
      step: "02", 
      title: "Подготовка",
      description: "Мойка и подготовка поверхности к обработке"
    },
    {
      step: "03",
      title: "Обработка",
      description: "Нанесение защитных составов на все элементы"
    },
    {
      step: "04",
      title: "Контроль",
      description: "Проверка качества и выдача гарантии"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-automotive-steel to-automotive-steel/80 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Защита вашего
                <span className="text-automotive-orange"> автомобиля</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Профессиональная антикоррозийная обработка с гарантией 15 лет. 
                Защитите свой автомобиль от ржавчины и коррозии.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-automotive-orange hover:bg-automotive-orange/90 text-white px-8 py-4 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Записаться на обработку
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-automotive-steel px-8 py-4 text-lg">
                  Узнать цену
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/5d0ecb76-ffb2-4433-83b1-bf5552fc759b.jpg" 
                alt="Антикоррозийная обработка автомобиля"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-automotive-light">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-steel mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг по защите вашего автомобиля</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-automotive-orange/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name={service.icon as any} size={32} className="text-automotive-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-automotive-steel">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="text-2xl font-bold text-automotive-orange">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-steel mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Гарантируем качество и надежность</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-automotive-orange rounded-full flex items-center justify-center mx-auto">
                  <Icon name={advantage.icon as any} size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-automotive-steel">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-automotive-light">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-steel mb-4">Процесс работы</h2>
            <p className="text-xl text-gray-600">Как проходит антикоррозийная обработка</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-automotive-orange rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-automotive-steel">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-automotive-orange/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-steel mb-4">Цены и гарантии</h2>
            <p className="text-xl text-gray-600">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-gray-200 hover:border-automotive-orange transition-colors duration-300">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-automotive-steel">Базовая</h3>
                <div className="text-4xl font-bold text-automotive-orange my-3 mx-0 px-0 py-0">от 15000 ₽</div>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Обработка кузова</li>
                  <li>✓ Защита днища</li>
                  <li>✓ Гарантия 5 лет</li>
                </ul>
                <Button className="w-full bg-automotive-steel hover:bg-automotive-steel/90">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-automotive-orange relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-automotive-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-automotive-steel">Стандарт</h3>
                <div className="text-4xl font-bold text-automotive-orange py-0">от 25000 ₽</div>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Полная обработка</li>
                  <li>✓ Скрытые полости</li>
                  <li>✓ Обработка арок</li>
                  <li>✓ Гарантия 10 лет</li>
                </ul>
                <Button className="w-full bg-automotive-orange hover:bg-automotive-orange/90">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-gray-200 hover:border-automotive-orange transition-colors duration-300">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-automotive-steel">Премиум</h3>
                <div className="text-4xl font-bold text-automotive-orange">от 35000 ₽</div>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Все включено</li>
                  <li>✓ Премиум материалы</li>
                  <li>✓ Детейлинг</li>
                  <li>✓ Гарантия 15 лет</li>
                </ul>
                <Button className="w-full bg-automotive-steel hover:bg-automotive-steel/90">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-automotive-steel text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-200">Свяжитесь с нами для записи на обработку</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-automotive-orange rounded-full flex items-center justify-center mx-auto">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Телефон</h3>
              <p className="text-gray-200">+7 (911) 207-48-30</p>
              <p className="text-gray-200">Работаем 10:00 - 20:00</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-automotive-orange rounded-full flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Адрес</h3>
              <p className="text-gray-200">г. Санкт-Петербург, г. Пушкин, ул. Автомобильная 4А2</p>
              <p className="text-gray-200"></p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-automotive-orange rounded-full flex items-center justify-center mx-auto">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-200">STO-AvtoBest@yandex.ru</p>
              <p className="text-gray-200">Ответим в течение часа</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-automotive-orange hover:bg-automotive-orange/90 text-white px-12 py-4 text-xl">
              <Icon name="Phone" size={24} className="mr-3" />
              Записаться сейчас
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;