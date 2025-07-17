import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: "ShoppingBag",
      title: "Продажа платьев",
      description: "Эксклюзивные коллекции свадебных платьев от ведущих дизайнеров мира"
    },
    {
      icon: "Calendar",
      title: "Аренда платьев",
      description: "Возможность аренды роскошных платьев для особенного дня"
    },
    {
      icon: "Users",
      title: "Консультации стилиста",
      description: "Персональные консультации по выбору идеального образа"
    },
    {
      icon: "Sparkles",
      title: "Реставрация и отпаривание",
      description: "Профессиональная реставрация и подготовка платьев к торжеству"
    }
  ];

  const collections = [
    {
      title: "Классическая элегантность",
      description: "Изысканные силуэты в традиционном стиле",
      price: "от 120 000 ₽",
      image: "/img/59dd5a1e-5e3a-4b19-907e-d41b65eee755.jpg"
    },
    {
      title: "Современная роскошь",
      description: "Актуальные тренды в премиальном исполнении",
      price: "от 150 000 ₽",
      image: "/img/5e5c6020-49e9-4cd1-8083-c0080e73076c.jpg"
    },
    {
      title: "Винтажный шарм",
      description: "Уникальные модели в стиле прошлых эпох",
      price: "от 100 000 ₽",
      image: "/img/4e2962b0-febd-4fe5-a70f-13fe14026327.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-oldmoney-offwhite to-oldmoney-cream">
      {/* Header */}
      <header className="bg-oldmoney-brown/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="text-oldmoney-gold" size={32} />
              <h1 className="text-2xl font-cormorant font-bold text-oldmoney-cream">
                Maison Élégance
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-oldmoney-cream hover:text-oldmoney-gold transition-colors font-opensans">
                Услуги
              </a>
              <a href="#collections" className="text-oldmoney-cream hover:text-oldmoney-gold transition-colors font-opensans">
                Коллекции
              </a>
              <a href="#appointment" className="text-oldmoney-cream hover:text-oldmoney-gold transition-colors font-opensans">
                Записаться
              </a>
            </div>
            <Button variant="outline" className="bg-transparent border-oldmoney-gold text-oldmoney-gold hover:bg-oldmoney-gold hover:text-oldmoney-brown">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-cormorant font-bold text-oldmoney-charcoal mb-6">
              Изысканность в каждой детали
            </h2>
            <p className="text-xl md:text-2xl text-oldmoney-charcoal/80 mb-8 font-opensans">
              Превратите свой особенный день в произведение искусства
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-oldmoney-brown hover:bg-oldmoney-brown/90 text-oldmoney-cream font-opensans px-8 py-3"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Посмотреть коллекции
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-oldmoney-charcoal text-oldmoney-charcoal hover:bg-oldmoney-charcoal hover:text-oldmoney-cream font-opensans px-8 py-3"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на примерку
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-oldmoney-gold rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-oldmoney-gold rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-oldmoney-gold rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-oldmoney-charcoal mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-oldmoney-charcoal/70 max-w-2xl mx-auto font-opensans">
              Полный спектр услуг для создания идеального свадебного образа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-oldmoney-cream hover:shadow-lg transition-shadow animate-slide-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-oldmoney-gold/10 rounded-full flex items-center justify-center group-hover:bg-oldmoney-gold/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-oldmoney-gold" />
                  </div>
                  <CardTitle className="text-xl font-cormorant text-oldmoney-charcoal">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center font-opensans">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-oldmoney-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-oldmoney-charcoal mb-4">
              Коллекции
            </h2>
            <p className="text-xl text-oldmoney-charcoal/70 max-w-2xl mx-auto font-opensans">
              Уникальные платья для самого важного дня в жизни
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-slide-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="h-80 bg-gradient-to-br from-oldmoney-cream to-oldmoney-offwhite relative overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-cormorant text-oldmoney-charcoal">
                    {collection.title}
                  </CardTitle>
                  <CardDescription className="font-opensans">
                    {collection.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-cormorant text-oldmoney-gold font-semibold">
                      {collection.price}
                    </span>
                    <Button variant="outline" className="border-oldmoney-brown text-oldmoney-brown hover:bg-oldmoney-brown hover:text-oldmoney-cream">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-oldmoney-charcoal mb-4">
                Записаться на примерку
              </h2>
              <p className="text-xl text-oldmoney-charcoal/70 font-opensans">
                Позвольте нам помочь вам найти платье вашей мечты
              </p>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-oldmoney-charcoal font-opensans">
                        Ваше имя
                      </Label>
                      <Input 
                        id="name" 
                        placeholder="Анна Иванова"
                        className="mt-2 border-oldmoney-cream focus:border-oldmoney-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-oldmoney-charcoal font-opensans">
                        Телефон
                      </Label>
                      <Input 
                        id="phone" 
                        placeholder="+7 (999) 123-45-67"
                        className="mt-2 border-oldmoney-cream focus:border-oldmoney-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-oldmoney-charcoal font-opensans">
                      Email
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="anna@example.com"
                      className="mt-2 border-oldmoney-cream focus:border-oldmoney-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date" className="text-oldmoney-charcoal font-opensans">
                      Дата свадьбы
                    </Label>
                    <Input 
                      id="date" 
                      type="date"
                      className="mt-2 border-oldmoney-cream focus:border-oldmoney-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-oldmoney-charcoal font-opensans">
                      Дополнительная информация
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о своих предпочтениях, размере, бюджете..."
                      rows={4}
                      className="mt-2 border-oldmoney-cream focus:border-oldmoney-gold"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-oldmoney-brown hover:bg-oldmoney-brown/90 text-oldmoney-cream font-opensans py-3"
                    size="lg"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-oldmoney-charcoal text-oldmoney-cream py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Crown" className="text-oldmoney-gold" size={24} />
                <h3 className="text-xl font-cormorant font-bold">Maison Élégance</h3>
              </div>
              <p className="text-oldmoney-cream/70 font-opensans">
                Создаем незабываемые образы для самого важного дня в жизни
              </p>
            </div>
            <div>
              <h4 className="text-lg font-cormorant font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-oldmoney-cream/70 font-opensans">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@maison-elegance.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Тверская, 15</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-cormorant font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-oldmoney-cream/70 font-opensans">
                <p>Пн-Пт: 10:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
                <p className="text-oldmoney-gold">Примерки по записи</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-cormorant font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-oldmoney-cream hover:text-oldmoney-gold">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-oldmoney-cream hover:text-oldmoney-gold">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-oldmoney-cream hover:text-oldmoney-gold">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-oldmoney-cream/20 mt-12 pt-8 text-center">
            <p className="text-oldmoney-cream/70 font-opensans">
              © 2024 Maison Élégance. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;