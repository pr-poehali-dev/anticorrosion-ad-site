import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Эвакуация автомобиля",
      description: "Безопасная транспортировка неисправного авто до сервиса или гаража",
      price: "от 2 000 ₽",
      icon: "Truck"
    },
    {
      title: "Запуск двигателя",
      description: "Быстрый запуск севшего аккумулятора с помощью пуско-зарядного устройства",
      price: "от 800 ₽",
      icon: "Zap"
    },
    {
      title: "Замена колеса",
      description: "Установка запасного колеса при проколе или повреждении шины",
      price: "от 600 ₽",
      icon: "Settings"
    },
    {
      title: "Вскрытие замков",
      description: "Профессиональное вскрытие автомобиля при заблокированных ключах",
      price: "от 1 200 ₽",
      icon: "Key"
    },
    {
      title: "Доставка топлива",
      description: "Привоз бензина или дизтоплива при его нехватке в баке",
      price: "от 500 ₽",
      icon: "Fuel"
    },
    {
      title: "Мелкий ремонт",
      description: "Устранение простых неисправностей на месте поломки",
      price: "от 1 000 ₽",
      icon: "Wrench"
    }
  ];

  const advantages = [
    {
      title: "24/7 работаем",
      description: "Круглосуточная служба без выходных",
      icon: "Clock"
    },
    {
      title: "Быстрый выезд",
      description: "Прибытие в течение 30-60 минут",
      icon: "Timer"
    },
    {
      title: "По всему городу",
      description: "Работаем в любом районе Москвы и области",
      icon: "MapPin"
    },
    {
      title: "Опытные мастера",
      description: "Сертифицированные специалисты с опытом",
      icon: "Users"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Звонок",
      description: "Позвоните нам или оставьте заявку онлайн"
    },
    {
      step: "02", 
      title: "Диспетчер",
      description: "Диспетчер уточнит детали и направит мастера"
    },
    {
      step: "03",
      title: "Выезд",
      description: "Специалист выезжает к вам в течение 30 минут"
    },
    {
      step: "04",
      title: "Помощь",
      description: "Решаем проблему на месте или эвакуируем"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emergency-red to-emergency-red/80 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-emergency-yellow rounded-full animate-pulse"></div>
                <span className="text-emergency-yellow font-semibold text-lg">ЭКСТРЕННАЯ СЛУЖБА</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Помощь на дороге
                <span className="text-emergency-yellow"> 24/7</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Сломался автомобиль? Не паникуйте! Наша служба экстренной помощи 
                приедет в любое время и поможет решить проблему на месте.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-emergency-yellow hover:bg-emergency-yellow/90 text-black px-8 py-4 text-lg font-bold">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 911-HELP
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emergency-red px-8 py-4 text-lg">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Заявка онлайн
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} className="text-emergency-yellow" />
                  <span className="text-gray-200">Выезд 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Timer" size={20} className="text-emergency-yellow" />
                  <span className="text-gray-200">За 30 минут</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/ffeaec61-3ff2-4a5f-bcca-4f95d1a1a345.jpg" 
                alt="Аварийная помощь на дороге"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-emergency-yellow text-black px-6 py-3 rounded-full font-bold shadow-lg">
                <Icon name="Phone" size={20} className="inline mr-2" />
                Срочный вызов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Stats */}
      <section className="py-16 px-4 bg-emergency-light">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold text-emergency-red">30 мин</div>
              <p className="text-gray-600">среднее время прибытия</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-emergency-red">24/7</div>
              <p className="text-gray-600">работаем круглосуточно</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-emergency-red">5000+</div>
              <p className="text-gray-600">выездов в месяц</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-emergency-red">98%</div>
              <p className="text-gray-600">довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emergency-blue mb-4">Виды помощи</h2>
            <p className="text-xl text-gray-600">Решаем любые проблемы с автомобилем на дороге</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-emergency-red">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-emergency-red/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-emergency-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-emergency-blue">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="text-2xl font-bold text-emergency-red">{service.price}</div>
                  <Button className="w-full bg-emergency-red hover:bg-emergency-red/90">
                    Вызвать мастера
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-emergency-light">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emergency-blue mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600">Почему выбирают нашу службу помощи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-emergency-red rounded-full flex items-center justify-center mx-auto">
                  <Icon name={advantage.icon as any} size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-emergency-blue">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emergency-blue mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600">Простой алгоритм получения помощи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-emergency-red rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-emergency-blue">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-emergency-red/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-emergency-light">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emergency-blue mb-4">Тарифы на выезд</h2>
            <p className="text-xl text-gray-600">Честные цены без скрытых доплат</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-gray-200 hover:border-emergency-red transition-colors duration-300">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-emergency-blue">Экспресс</h3>
                <div className="text-4xl font-bold text-emergency-red">1 500 ₽</div>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Выезд за 60 минут</li>
                  <li>✓ Стандартный набор услуг</li>
                  <li>✓ В пределах МКАД</li>
                </ul>
                <Button className="w-full bg-emergency-blue hover:bg-emergency-blue/90">
                  Вызвать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-emergency-red relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emergency-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-emergency-blue">Срочный</h3>
                <div className="text-4xl font-bold text-emergency-red">2 500 ₽</div>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Выезд за 30 минут</li>
                  <li>✓ Полный набор услуг</li>
                  <li>✓ Московская область</li>
                  <li>✓ Приоритетное обслуживание</li>
                </ul>
                <Button className="w-full bg-emergency-red hover:bg-emergency-red/90">
                  Вызвать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-gray-200 hover:border-emergency-red transition-colors duration-300">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-emergency-blue">Премиум</h3>
                <div className="text-4xl font-bold text-emergency-red">4 000 ₽</div>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Выезд за 20 минут</li>
                  <li>✓ VIP обслуживание</li>
                  <li>✓ Эвакуатор включен</li>
                  <li>✓ Гарантия на работы</li>
                </ul>
                <Button className="w-full bg-emergency-blue hover:bg-emergency-blue/90">
                  Вызвать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20 px-4 bg-emergency-red text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Нужна помощь прямо сейчас?</h2>
            <p className="text-xl text-gray-200">Звоните по номеру экстренной службы</p>
            
            <div className="flex flex-col items-center space-y-6">
              <div className="text-6xl font-bold text-emergency-yellow">
                +7 (495) 911-HELP
              </div>
              <Button size="lg" className="bg-emergency-yellow hover:bg-emergency-yellow/90 text-black px-12 py-4 text-2xl font-bold">
                <Icon name="Phone" size={32} className="mr-3" />
                Позвонить сейчас
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-emergency-yellow rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Clock" size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold">Режим работы</h3>
                <p className="text-gray-200">Круглосуточно, без выходных</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-emergency-yellow rounded-full flex items-center justify-center mx-auto">
                  <Icon name="MapPin" size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold">Зона покрытия</h3>
                <p className="text-gray-200">Москва и Московская область</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-emergency-yellow rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Mail" size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-200">help@road-rescue.ru</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;