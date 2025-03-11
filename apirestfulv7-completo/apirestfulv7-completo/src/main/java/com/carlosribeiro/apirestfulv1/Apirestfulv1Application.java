package com.carlosribeiro.apirestfulv1;

import com.carlosribeiro.apirestfulv1.model.*;
import com.carlosribeiro.apirestfulv1.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@SpringBootApplication
public class Apirestfulv1Application implements CommandLineRunner {

	private final BarracaRepository barracaRepository;
	private final FormatoRepository formatoRepository;
	private final UsuarioRepository usuarioRepository;
	private final CarrinhoRepository carrinhoRepository;
	private final ItemDeCarrinhoRepository itemDeCarrinhoRepository;

	public Apirestfulv1Application(BarracaRepository barracaRepository,
								   FormatoRepository formatoRepository,
								   UsuarioRepository usuarioRepository,
								   CarrinhoRepository carrinhoRepository,
								   ItemDeCarrinhoRepository itemDeCarrinhoRepository
	) {
		this.barracaRepository = barracaRepository;
		this.formatoRepository = formatoRepository;
		this.usuarioRepository = usuarioRepository;
		this.carrinhoRepository = carrinhoRepository;
		this.itemDeCarrinhoRepository = itemDeCarrinhoRepository;
	}

	public static void main(String[] args) {

		SpringApplication.run(Apirestfulv1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Formato iglu = new Formato("Iglu");
		formatoRepository.save(iglu);

		Formato bivak = new Formato("Bivak");
		formatoRepository.save(bivak);

		Formato tunel = new Formato("Túnel");
		formatoRepository.save(tunel);

		Formato geodesica = new Formato("Geodésica");
		formatoRepository.save(geodesica);

		Barraca barraca = new Barraca(
				"barraca-simples1.png",
				"Barraca Mor 2 pessoas",
				"A Barraca Mor 2 Pessoas é ideal para acampamentos em qualquer estação do ano. Com estrutura de fácil montagem, ela oferece conforto e proteção contra ventos e chuvas. Compacta e resistente, é perfeita para viagens e aventuras ao ar livre.",
				true,
				20,
				BigDecimal.valueOf(60.00),
				LocalDate.of(2024, 4, 12),
				iglu,
				"Aluguel",
				4,
				"2 pessoas",
				"Poliéster 190T com revestimento",
				"Fibra de vidro",
				"210 x 150 x 120 cm",
				"2,5 kg",
				"Verde"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-simples2.png",
				"Barraca Premium Canyon 2 pessoas",
				"A Barraca Premium Canyon para 2 pessoas é ideal para aventuras ao ar livre. Com design robusto e estrutura resistente, ela oferece proteção contra ventos e chuvas moderadas. Compacta e fácil de montar, é perfeita para acampamentos de curta duração.",
				true,
				25,
				BigDecimal.valueOf(85.00),
				LocalDate.of(2024, 4, 15),
				iglu,
				"Aluguel",
				5,
				"2 pessoas",
				"Poliéster 190T com revestimento em PU",
				"Fibra de vidro",
				"200 x 150 x 110 cm",
				"2,3 kg",
				"Azul"
		);
		barracaRepository.save(barraca);

		Barraca barraca1 = new Barraca(
				"barraca-simples3.png",
				"Barraca Koala Poliéster 170T",
				"A Barraca Koala é feita de poliéster 170T, proporcionando uma excelente relação custo-benefício. Leve e prática, é ideal para aventuras ocasionais em ambientes secos.",
				false,
				15,
				BigDecimal.valueOf(100.00),
				LocalDate.of(2024, 4, 18),
				iglu,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster 170T",
				"Fibra de vidro",
				"210 x 130 x 120 cm",
				"2,1 kg",
				"Cinza"
		);
		barracaRepository.save(barraca1);

		barraca = new Barraca(
				"barraca-simples4.png",
				"Barraca Iglu 2 Belfix",
				"A Barraca Iglu 2 Belfix é compacta e prática, oferecendo boa proteção contra chuvas leves. Ideal para iniciantes em acampamentos ou para crianças.",
				true,
				30,
				BigDecimal.valueOf(65.00),
				LocalDate.of(2024, 4, 20),
				iglu,
				"Aluguel",
				5,
				"2 pessoas",
				"Poliéster 180T",
				"Fibra de vidro",
				"205 x 150 x 110 cm",
				"2,4 kg",
				"Verde e laranja"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-simples5.png",
				"Barraca Nautica Fox",
				"A Barraca Nautica Fox é perfeita para duas pessoas, proporcionando conforto e segurança para acampamentos de fim de semana. Possui boa ventilação e resistência a chuvas leves.",
				true,
				18,
				BigDecimal.valueOf(80.00),
				LocalDate.of(2024, 4, 22),
				iglu,
				"Aluguel",
				4,
				"2 pessoas",
				"Poliéster 190T",
				"Fibra de vidro",
				"200 x 140 x 115 cm",
				"2,2 kg",
				"Azul e cinza"
		);
		barracaRepository.save(barraca);

		Barraca barraca2 = new Barraca(
				"barraca-simples6.png",
				"Barraca Weekend Echolife",
				"A Barraca Weekend Echolife é projetada para os aventureiros que procuram conforto e praticidade. Feita com materiais de alta qualidade, ela oferece proteção contra chuvas intensas e ótima ventilação.",
				false,
				10,
				BigDecimal.valueOf(220.00),
				LocalDate.of(2024, 4, 25),
				iglu,
				"Venda",
				5,
				"3 pessoas",
				"Poliéster 190T com coluna d'água 3000mm",
				"Alumínio",
				"220 x 180 x 120 cm",
				"3,5 kg",
				"Verde escuro"
		);
		barracaRepository.save(barraca2);

		barraca = new Barraca(
				"barraca-simples7.png",
				"Barraca Genérica Roxa",
				"A Barraca Genérica Roxa combina simplicidade e funcionalidade, sendo ideal para quem busca uma barraca acessível e prática para acampamentos rápidos.",
				false,
				8,
				BigDecimal.valueOf(40.00),
				LocalDate.of(2024, 4, 28),
				iglu,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster 170T",
				"Fibra de vidro",
				"200 x 140 x 110 cm",
				"2,1 kg",
				"Roxa"
		);
		barracaRepository.save(barraca);

		Barraca barraca3 = new Barraca(
				"barraca-simples8.png",
				"Barraca Floryou Montagem Rápida",
				"A Barraca Floryou Montagem Rápida é ideal para quem deseja agilidade ao montar uma barraca. Com estrutura pop-up, é perfeita para acampamentos curtos e práticos.",
				false,
				12,
				BigDecimal.valueOf(280.00),
				LocalDate.of(2024, 5, 1),
				iglu,
				"Venda",
				4,
				"3 pessoas",
				"Poliéster reforçado com costuras seladas",
				"Aço inoxidável",
				"240 x 180 x 130 cm",
				"4,2 kg",
				"Amarelo"
		);
		barracaRepository.save(barraca3);

		barraca = new Barraca(
				"barraca-bivak1.png",
				"Barraca Nautica Camping",
				"A barraca de camping individual Bivaque NTK Windy é o refúgio perfeito para os aventureiros solitários. Projetada com uma capacidade para uma pessoa, ela oferece uma experiência de acampamento confortável e segura em qualquer ambiente. Seu design super leve e compacto torna-a uma companheira ideal para trilhas, caminhadas e expedições de qualquer duração. Com sua resistência e durabilidade excepcionais, a barraca NTK Windy é construída para enfrentar as condições mais desafiadoras. Com uma coluna d'água de 2.500mm, ela garante proteção e mantém você seco e confortável em qualquer estação do ano. Seja durante um verão quente e úmido ou no inverno, essa barraca oferece a tranquilidade de estar protegido contra os elementos. Com um comprimento estendido de 2,5 metros, a barraca proporciona um espaço generoso para acomodar seus equipamentos e oferece conforto suficiente para uma boa noite de sono. Seu interior é projetado ergonomicamente para maximizar o espaço interno e permitir que você se mova livremente dentro da barraca. Além disso, a construção da barraca inclui janelas de ventilação estrategicamente posicionadas, que proporcionam uma circulação de ar adequada, evitando a condensação e mantendo o ambiente interno fresco e arejado. A montagem da barraca NTK Windy é rápida e fácil, graças ao seu sistema de encaixe de varetas e às instruções simples fornecidas.",
				true,
				4,
				BigDecimal.valueOf(497.90),
				LocalDate.of(2024, 4, 12),
				bivak,
				"Venda",
				4,
				"1 pessoa",
				"100% poliéster respirável",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Verde Neon"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-bivak2.png",
				"Barraca de Campismo Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(65.00),
				LocalDate.of(2024, 4, 12),
				bivak,
				"Aluguel",
				3,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"

		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-bivak3.png",
				"Barraca Outdoor Research Helium Vazada",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(120.00),
				LocalDate.of(2024, 4, 12),
				bivak,
				"Aluguel",
				4,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-bivak4.png",
				"Barraca Outdoor Research Helium Sólida",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(950.00),
				LocalDate.of(2024, 4, 12),
				bivak,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-bivak5.png",
				"Barraca Eureka! Solitaire Três Estações",
				"Descrição barraca.",
				true,
				2,
				BigDecimal.valueOf(40.00),
				LocalDate.of(2024, 4, 12),
				bivak,
				"Aluguel",
				2,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-bivak6.png",
				"Barraca UltraLeve Geertop",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(990.00),
				LocalDate.of(2024, 4, 12),
				bivak,
				"Venda",
				4,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);


		barraca = new Barraca(
				"barraca-tunel1.png",
				"Barraca Ayamaya 2 quartos",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(95.00),
				LocalDate.of(2024, 4, 12),
				tunel,
				"Aluguel",
				5,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-tunel2.png",
				"Barraca WnewTools",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(80.00),
				LocalDate.of(2024, 4, 12),
				tunel,
				"Aluguel",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-tunel3.png",
				"Barraca Sizhifavor HH 3000 mm 2 quartos",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(450.00),
				LocalDate.of(2024, 4, 12),
				tunel,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-tunel4.png",
				"Barraca Genérica 3 quartos",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(135.00),
				LocalDate.of(2024, 4, 12),
				tunel,
				"Aluguel",
				5,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-tunel5.png",
				"Barraca Genérica 2 quartos proteção anti-vento",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(115.00),
				LocalDate.of(2024, 4, 12),
				tunel,
				"Aluguel",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);
		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica1.png",
				"Barraca Naturehike",
				"Descrição barraca.",
				true,
				4,
				BigDecimal.valueOf(3450.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				4,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica2.png",
				"Barraca The North Face Geodome 4 NV21801",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4160.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoa",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica4.png",
				"Barraca Geodésica Genérica",
				"Descrição barraca.",
				true,
				3,
				BigDecimal.valueOf(1630.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				3,
				"2 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica3.png",
				"Barraca The North Face Geodome 4 NV21800",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4200.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		barraca = new Barraca(
				"barraca-geodesica5.png",
				"Barraca The North Face Geodome 4 NV21802",
				"Descrição barraca.",
				true,
				5,
				BigDecimal.valueOf(4250.00),
				LocalDate.of(2024, 4, 12),
				geodesica,
				"Venda",
				5,
				"1 pessoas",
				"Poliéster",
				"Fibra de vidro",
				"250 x 150 x 8500 cm",
				"1,9 kg",
				"Cor"
		);
		barracaRepository.save(barraca);

		Usuario usuario = new Usuario(
				"root@root.com",
				"root",
				"rute"
		);
		usuarioRepository.save(usuario);

		usuario = new Usuario(
				"sara@sara.com",
				"sara",
				"Sara"
		);
		usuarioRepository.save(usuario);

		Carrinho carrinho = new Carrinho(LocalDateTime.now(), usuario);
		carrinhoRepository.save(carrinho);

		ItemDeCarrinho itemDeCarrinho = new ItemDeCarrinho(
				3,
				carrinho,
				barraca1
		);
		itemDeCarrinhoRepository.save(itemDeCarrinho);

		itemDeCarrinho = new ItemDeCarrinho(
				5,
				carrinho,
				barraca2
		);
		itemDeCarrinhoRepository.save(itemDeCarrinho);

		itemDeCarrinho = new ItemDeCarrinho(
				1,
				carrinho,
				barraca3
		);
		itemDeCarrinhoRepository.save(itemDeCarrinho);
	}
}

