// guide.js — Lista de porciones (Dr. Juan Pablo Soto R., USDA FoodData Central)
// Formato: [alimento, "medida"] · Edita libremente las medidas aquí.
const FOOD_GUIDE = {
  "Carbohidrato": [
    { sub: "Cereales y harinas", items: [
      ["Arroz blanco", "1/3 taza · 20 g crudo · 50 g cocido"],
      ["Arroz integral", "1/3 taza · 20 g crudo · 50 g cocido"],
      ["Avena", "1/4 taza · 20 g"],
      ["Canelones", "2 unidades"],
      ["Cereal desayuno azucarado", "1/2 taza"],
      ["Cereal desayuno sin azúcar", "3/4 taza"],
      ["Galleta María / Soda / Saníssimo", "1 paquete"],
      ["Gallo pinto", "1/3 taza"],
      ["Granola", "1/4 taza"],
      ["Harina de maíz", "3 cucharadas"],
      ["Harina de trigo", "3 cucharadas"],
      ["Tortilla de maíz", "2 unidades"],
      ["Tortilla de trigo", "1 unidad"],
      ["Leche de almendras regular", "1.5 tazas · 350 ml"],
      ["Pan blanco o integral", "1 tajada"],
      ["Pan pita", "1/2 unidad"],
      ["Pan baguette", "5 cm"],
      ["Palomitas de maíz", "2.5 tazas"],
      ["Harina pancake (solo agua)", "1/4 taza"],
      ["Pasta blanca o integral", "1/2 taza · 30 g crudo"],
      ["Quinoa", "1/3 taza · 20 g crudo · 50 g cocido"]
    ]},
    { sub: "Vegetal harinoso", items: [
      ["Ayote mantequilla", "1.5 tazas · 200 g cocido"],
      ["Camote (o en puré)", "1/2 taza · 85 g cocido"],
      ["Papa (o en puré)", "1/2 taza · 85 g cocido"],
      ["Plátano", "1/4 de unidad · 65 g cocido"],
      ["Pejibaye", "1 y 1/2 unidad · 50 g cocido"],
      ["Yuca", "1/2 unidad · 50 g cocido"]
    ]},
    { sub: "Legumbres", items: [
      ["Frijoles", "1/3 taza sin caldo · 25 g crudo · 65 g cocido"],
      ["Falafel", "1 unidad (etiqueta: 80 kcal)"],
      ["Lentejas", "1/3 taza sin caldo"],
      ["Garbanzos", "1/3 taza sin caldo"],
      ["Petit pois / alverjas", "1/3 taza sin caldo"],
      ["Hummus", "1/4 de taza"],
      ["Edamame", "2/3 de taza"]
    ]}
  ],
  "Fruta": [
    { sub: "Frutas (1 porción = 60 kcal)", items: [
      ["Agua de pipa", "1 taza · 250 ml"],
      ["Arándano", "3/4 taza"],
      ["Albaricoque", "1 unidad"],
      ["Azúcar, miel, jalea, sirope", "1 cucharada"],
      ["Banano sin cáscara", "1 unidad"],
      ["Carambola", "2 unidades"],
      ["Cas", "1 taza"],
      ["Ciruela", "2 unidades"],
      ["Ciruela pasa", "3 unidades"],
      ["Durazno", "1 unidad"],
      ["Dátiles", "3 unidades"],
      ["Fresas", "1.25 taza"],
      ["Frambuesa", "1 taza"],
      ["Bebida hidratante en polvo", "1 cucharada"],
      ["Bebida hidratante regular", "250 ml"],
      ["Guayaba", "1 unidad"],
      ["Granadilla", "2 unidades"],
      ["Guanábana", "1/2 taza"],
      ["Goji berries", "3 cucharadas"],
      ["Higos naturales", "2 unidades peq."],
      ["Mamón chino", "10 unidades"],
      ["Mandarina", "1 unidad grande"],
      ["Manga", "1/2 taza"],
      ["Mango verde pequeño", "1 unidad"],
      ["Manzana", "1 unidad"],
      ["Manzana de agua", "3 unidades peq."],
      ["Maracuyá", "1 unidad"],
      ["Melocotón", "1 unidad"],
      ["Melón", "1 taza"],
      ["Mermelada (revisar etiqueta)", "1 cucharada"],
      ["Mora", "1 taza"],
      ["Naranja", "1 unidad"],
      ["Pasas", "1/8 de taza"],
      ["Papaya", "1 taza"],
      ["Pera grande", "1 unidad"],
      ["Piña", "1 tajada"],
      ["Sandía", "1.25 taza"],
      ["Uvas", "7 unidades"],
      ["Kiwi", "1 unidad"],
      ["Jocote", "5 unidades"],
      ["Jugo de fruta", "1/2 taza"],
      ["Jugo de naranja Dos Pinos", "1/4 de taza"],
      ["Fruta deshidratada", "100 ml · 18 g"]
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
      ["Atún en agua", "2 cucharadas · 30 g cocido"],
      ["Carne de res sin grasa", "1 cajita de fósforos · 30 g cocido"],
      ["Camarones", "3 medianos · 30 g cocido"],
      ["Clara de huevo", "2 unidades"],
      ["Jamón light", "2 rebanadas"],
      ["Lomo de cerdo", "1 cajita de fósforos · 30 g cocido"],
      ["Muslo de pollo sin piel", "1 unidad"],
      ["Ostras", "6 medianas"],
      ["Pechuga de pollo", "1 cajita de fósforos · 30 g cocido"],
      ["Pescados (salmón, trucha, tilapia, corvina)", "1 cajita de fósforos · 30 g cocido"],
      ["Queso cottage", "1/4 taza"],
      ["Queso muy bajo en grasa", "1 cajita de fósforos · 30 g"],
      ["Salchichas light", "1 unidad"],
      ["Sardinas", "2 unidades"],
      ["Scoop de proteína (GNC, ISO 100…)", "1/3 de scoop · 10 g"],
      ["Yogurt griego (Pricemart o similar)", "1/3 taza · 75 g"]
    ]}
  ],
  "Proteína Media": [
    { sub: "Proteínas medias (75 kcal)", items: [
      ["Pollo con piel", "1 cajita de fósforos · 30 g cocido"],
      ["Carne de res con grasa visible", "1 cajita de fósforos · 35 g cocido"],
      ["Chuleta de cerdo", "1 cajita de fósforos · 30 g cocido"],
      ["Huevo entero", "1 unidad grande"],
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
      ["Aceitunas negras", "15 unidades peq."],
      ["Aceitunas verdes", "12 unidades · 30 g"],
      ["Aguacate", "1/4 de unidad · 35 g"],
      ["Ajonjolí", "1 cucharada · 10 g"],
      ["Almendras", "9 unidades · 10 g"],
      ["Maní", "10 g"],
      ["Semillas o su mantequilla", "10 g"]
    ]},
    { sub: "Poliinsaturadas (45 kcal)", items: [
      ["Aceite de maíz, girasol, soya", "1 cucharadita · 5 g"],
      ["Chía", "1 cucharada"],
      ["Linaza", "1 cucharada · 12 g"],
      ["Margarina", "1 cucharadita · 5 g"],
      ["Mayonesa", "1 cucharadita · 7 g"],
      ["Mayonesa light", "1 cucharada · 20 g"]
    ]}
  ],
  "Fiesteros": [
    { sub: "Alimentos fiesteros (equivalencias)", items: [
      ["Whisky, ron, vodka, licores (80 kcal)", "45 ml = 1 Carbohidrato"],
      ["Vino blanco o tinto (160 kcal)", "145 ml = 2 Carbohidratos"],
      ["Sangría (250 kcal)", "1 copa = 3 Carbohidratos"],
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