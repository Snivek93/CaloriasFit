// guide.js — Lista de porciones (Dr. Juan Pablo Soto R., USDA FoodData Central)
// Formato: [alimento, "medida"] · Edita libremente las medidas aquí.
const FOOD_GUIDE = {
  "Carbohidrato": [
    { sub: "Cereales y harinas", items: [
      ["Arroz blanco", "1/3 taza · 20 g crudo · 50 g cocido"],
      ["Arroz integral", "1/3 taza · 20 g crudo · 70 g cocido"],
      ["Avena", "1/4 taza · 20 g"],
      ["Canelones", "2 unidades · 20 g crudo · 50 g cocido"],
      ["Cereal desayuno azucarado", "1/2 taza · 17 g"],
      ["Cereal desayuno sin azúcar", "3/4 taza · 20 g"],
      ["Galleta María / Soda / Saníssimo", "1 paquete"],
      ["Gallo pinto", "1/3 taza · 65 g cocido"],
      ["Granola", "1/4 taza · 25 g"],
      ["Harina de maíz", "3 cucharadas · 20 g"],
      ["Harina de trigo", "3 cucharadas · 20 g"],
      ["Tortilla de maíz", "2 unidades · 35 g"],
      ["Tortilla de trigo", "1 unidad · 35 g"],
      ["Leche de almendras regular", "1.5 tazas · 350 ml"],
      ["Pan blanco o integral", "1 tajada · 30 g"],
      ["Pan pita", "1/2 unidad · 30 g"],
      ["Pan baguette", "5 cm · 30 g"],
      ["Palomitas de maíz", "2.5 tazas · 20 g"],
      ["Harina pancake (solo agua)", "1/4 taza · 23 g"],
      ["Pasta blanca o integral", "1/2 taza · 20 g crudo · 50 g cocido"],
      ["Quinoa", "1/3 taza · 25 g crudo · 70 g cocido"]
    ]},
    { sub: "Vegetal harinoso", items: [
      ["Ayote mantequilla", "1.5 tazas · 200 g crudo · 185 g cocido"],
      ["Camote (o en puré)", "1/2 taza · 115 g crudo · 85 g cocido"],
      ["Papa (o en puré)", "1/2 taza · 115 g crudo · 85 g cocido"],
      ["Plátano", "1/4 de unidad · 65 g"],
      ["Pejibaye", "1 y 1/2 unidad · 40 g crudo · 50 g cocido"],
      ["Yuca", "1/2 unidad · 50 g"]
    ]},
    { sub: "Legumbres", items: [
      ["Frijoles", "1/3 taza sin caldo · 25 g crudo · 65 g cocido"],
      ["Falafel", "1 unidad · 25 g (revisar etiqueta: 80 kcal)"],
      ["Lentejas", "1/3 taza sin caldo · 25 g crudo · 75 g cocido"],
      ["Garbanzos", "1/3 taza sin caldo · 25 g crudo · 55 g cocido"],
      ["Petit pois / alverjas", "1/3 taza sin caldo · 100 g"],
      ["Hummus", "1/4 de taza · 35 g"],
      ["Edamame", "2/3 de taza · 65 g"]
    ]}
  ],
  "Fruta": [
    { sub: "Frutas (1 porción = 60 kcal)", items: [
      ["Agua de pipa", "1 taza · 250 ml"],
      ["Arándano", "3/4 taza · 150 g"],
      ["Albaricoque", "1 unidad · 140 g"],
      ["Azúcar, miel, jalea, sirope", "1 cucharada · 15 g"],
      ["Banano sin cáscara", "1 unidad · 65 g"],
      ["Carambola", "2 unidades · 230 g"],
      ["Cas", "1 taza · 100 g"],
      ["Ciruela", "2 unidades · 135 g"],
      ["Ciruela pasa", "3 unidades · 25 g"],
      ["Durazno", "1 unidad · 155 g"],
      ["Dátiles", "3 unidades · 20 g"],
      ["Fresas", "1.25 taza · 200 g"],
      ["Frambuesa", "1 taza · 125 g"],
      ["Bebida hidratante en polvo", "1 cucharada · 15 g"],
      ["Bebida hidratante regular", "250 ml"],
      ["Guayaba", "1 unidad · 150 g"],
      ["Granadilla", "2 unidades · 65 g"],
      ["Guanábana", "1/2 taza · 100 g"],
      ["Goji berries", "3 cucharadas · 20 g"],
      ["Higos naturales", "2 unidades peq. · 80 g"],
      ["Mamón chino", "10 unidades · 100 g"],
      ["Mandarina", "1 unidad grande · 120 g"],
      ["Manga", "1/2 taza · 100 g"],
      ["Mango verde pequeño", "1 unidad · 100 g"],
      ["Manzana", "1 unidad · 110 g"],
      ["Manzana de agua", "3 unidades peq. · 200 g"],
      ["Maracuyá", "1 unidad · 100 g"],
      ["Melocotón", "1 unidad · 160 g"],
      ["Melón", "1 taza · 185 g"],
      ["Mermelada (revisar etiqueta)", "1 cucharada · 20 g"],
      ["Mora", "1 taza · 160 g"],
      ["Naranja", "1 unidad · 130 g"],
      ["Pasas", "1/8 de taza · 20 g"],
      ["Papaya", "1 taza · 145 g"],
      ["Pera grande", "1 unidad · 100 g"],
      ["Piña", "1 tajada · 120 g"],
      ["Sandía", "1.25 taza · 200 g"],
      ["Uchuva", "125 g"],
      ["Uvas", "7 unidades · 85 g"],
      ["Kiwi", "1 unidad · 100 g"],
      ["Jocote", "5 unidades · 100 g"],
      ["Jugo de fruta", "1/2 taza · 125 ml"],
      ["Jugo de naranja Dos Pinos", "100 ml"],
      ["Fruta deshidratada", "1/4 de taza · 18 g"]
    ]}
  ],
  "Vegetal": [
    { sub: "Vegetales (libres, 25 kcal)", items: [
      ["Alcachofa", "libre"], ["Apio", "libre"], ["Acelga", "libre"], ["Arúgula", "libre"],
      ["Alfalfa / frijol nacido", "libre"], ["Berenjena", "libre"], ["Berros", "libre"],
      ["Brócoli", "libre"], ["Cebolla", "libre"], ["Cebollín", "libre"], ["Champiñones", "libre"],
      ["Chayote", "libre"], ["Chile dulce", "libre"], ["Coliflor", "libre"],
      ["Col de Bruselas", "libre"], ["Culantro", "libre"], ["Espinaca", "libre"],
      ["Espárragos", "libre"], ["Hojas de remolacha", "libre"], ["Hongos", "libre"],
      ["Lechuga", "libre"], ["Pepino", "libre"], ["Pepinillos sin azúcar", "libre"],
      ["Palmito", "libre"], ["Rábano", "libre"], ["Repollo", "libre"], ["Remolacha", "libre"],
      ["Tomate", "libre"], ["Vainicas", "libre"], ["Zanahoria", "libre"],
      ["Zapallo", "libre"], ["Zucchini", "libre"]
    ]}
  ],
  "Proteína Magra": [
    { sub: "Proteínas magras (45 kcal)", items: [
      ["Atún en agua", "2 cucharadas · 40 g crudo · 30 g cocido"],
      ["Carne de res sin grasa", "1 cajita de fósforos · 40 g crudo · 30 g cocido"],
      ["Camarones", "3 medianos · 40 g crudo · 30 g cocido"],
      ["Clara de huevo", "2 unidades · 65 g"],
      ["Jamón light", "2 rebanadas · 40 g"],
      ["Lomo de cerdo", "1 cajita de fósforos · 40 g crudo · 30 g cocido"],
      ["Muslo de pollo sin piel", "1 unidad · 40 g crudo · 30 g cocido"],
      ["Ostras", "6 medianas · 75 g crudo · 100 g cocido"],
      ["Pechuga de pollo", "1 cajita de fósforos · 40 g crudo · 30 g cocido"],
      ["Pescados (salmón, trucha, tilapia, corvina)", "1 cajita de fósforos · 40 g crudo · 30 g cocido"],
      ["Queso cottage", "1/4 taza · 55 g"],
      ["Queso muy bajo en grasa", "1 cajita de fósforos · 30 g"],
      ["Salchichas light", "1 unidad · 30 g"],
      ["Sardinas", "2 unidades · 30 g"],
      ["Scoop de proteína (GNC, ISO 100…)", "1/3 de scoop · 10 g"],
      ["Yogurt griego (Pricemart o similar)", "1/3 taza · 75 g"]
    ]}
  ],
  "Proteína Media": [
    { sub: "Proteínas medias (75 kcal)", items: [
      ["Pollo con piel", "1 cajita de fósforos · 40 g crudo · 30 g cocido"],
      ["Carne de res con grasa visible", "1 cajita de fósforos · 40 g crudo · 35 g cocido"],
      ["Chuleta de cerdo", "1 cajita de fósforos · 40 g crudo · 30 g cocido"],
      ["Huevo entero", "1 unidad grande · 55 g"],
      ["Queso semiduro", "1 cajita de fósforos · 30 g"],
      ["Queso ricotta / feta", "1/4 de taza · 50 g"],
      ["Queso maduro (mozzarella, gouda, edam)", "1 cajita de fósforos · 25 g"],
      ["Queso blanco o fresco (tipo Turrialba)", "1 cajita de fósforos · 25 g"]
    ]}
  ],
  "Lácteo": [
    { sub: "Lácteos (100 kcal)", items: [
      ["Leche descremada", "1 taza · 250 g"],
      ["Leche descremada en polvo", "3 cucharadas · 25 g"],
      ["Leche de soya", "1 taza · 250 g"],
      ["Yogurt natural bajo en grasa", "1/2 taza · 150 g"],
      ["Helado light bajo en grasa", "1/2 taza · 125 g"],
      ["Yogurt griego", "1/2 taza · 150 g"]
    ]}
  ],
  "Fruto Seco": [
    { sub: "Frutos secos (180 kcal)", items: [
      ["Almendras", "1/4 de taza · 30 g"],
      ["Nueces mixtas", "1/4 de taza · 30 g"],
      ["Maní", "1/4 de taza · 30 g"],
      ["Mantequilla de maní / almendras", "2 cucharadas · 30 g"],
      ["Marañón", "1/4 de taza · 30 g"],
      ["Pistachos", "1/4 de taza · 30 g"]
    ]}
  ],
  "Grasa": [
    { sub: "Saturadas (45 kcal)", items: [
      ["Aceite de coco", "1 cucharadita · 5 g"],
      ["Crema dulce", "1 cucharada · 15 g"],
      ["Coco rayado", "2 cucharadas · 15 g"],
      ["Chocolate 80%", "1 cuadrito · 10 g"],
      ["Leche de coco", "2 cucharadas · 25 g"],
      ["Mantequilla", "1 cucharadita · 5 g"],
      ["Natilla", "2 cucharadas · 25 g"],
      ["Natilla light", "3 cucharadas · 50 g"],
      ["Queso crema", "1 cucharada · 15 g"],
      ["Queso crema light", "2 cucharadas · 30 g"],
      ["Paté", "1 cucharada · 40 g"],
      ["Tocineta", "1 tirita · 10 g"],
      ["Pepperoni / salami", "5 unidades · 10 g"],
      ["Queso azul, americano, cheddar, parmesano", "1 slice o 1 cda · 15 g"]
    ]},
    { sub: "Monoinsaturadas (45 kcal)", items: [
      ["Aceite de oliva, canola, ajonjolí", "1 cucharadita · 5 g"],
      ["Aceitunas negras", "15 unidades peq. · 50 g"],
      ["Aceitunas verdes", "12 unidades · 30 g"],
      ["Aguacate", "1/4 de unidad · 35 g"],
      ["Ajonjolí", "1 cucharada · 10 g"],
      ["Almendras", "9 unidades · 10 g"],
      ["Maní", "10 g"],
      ["Semillas o su mantequilla", "10 g"]
    ]},
    { sub: "Poliinsaturadas (45 kcal)", items: [
      ["Aceite de maíz, girasol, soya", "1 cucharadita · 5 g"],
      ["Chía", "1 cucharada · 20 g"],
      ["Linaza", "1 cucharada · 12 g"],
      ["Margarina", "1 cucharadita · 5 g"],
      ["Mayonesa", "1 cucharadita · 7 g"],
      ["Mayonesa light", "1 cucharada · 20 g"]
    ]}
  ],
  "Fiesteros": [
    { sub: "Alimentos fiesteros (equivalencias)", items: [
      ["Whisky, ron, vodka, licores (80 kcal)", "45 ml (1.5 oz) = 1 Carbohidrato"],
      ["Vino blanco o tinto (160 kcal)", "145 ml (1.5 oz) = 2 Carbohidratos"],
      ["Sangría (250 kcal)", "145 ml (1.5 oz) = 3 Carbohidratos"],
      ["Cerveza light (Ultra, Coors, Imperial Light…)", "350 ml = 1 Carbohidrato"],
      ["Cerveza regular", "350 ml = 2 Carbohidratos"],
      ["Pizza pasta delgada (240 kcal)", "1 slice = 3 Carbohidratos"],
      ["Papas fritas pequeñas (240 kcal)", "1 paquete = 3 Carbohidratos"]
    ]}
  ],
  "Libres": [
    { sub: "Alimentos libres (0 kcal, revisar etiqueta)", items: [
      ["Vinagre balsámico en spray", "libre"],
      ["Chile picante a base de vegetales", "libre"],
      ["Mostaza amarilla", "libre"],
      ["Salsa de tomate Delga-C", "hasta 4 cdas"],
      ["Condimentos y especias", "libre"],
      ["Jugo de limón", "libre"],
      ["Leche de almendras sin azúcar", "hasta 200 ml"],
      ["Clight de cualquier sabor", "libre"],
      ["Gelatina light", "libre"],
      ["Suspiros Sweetwell", "libre"],
      ["Gaseosas light o zero", "libre"],
      ["Té frío zero", "libre"],
      ["Cualquier bebida sin calorías", "libre"]
    ]}
  ]
};
