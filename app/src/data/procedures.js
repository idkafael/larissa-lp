// ─── Número de WhatsApp da Dra. Larissa ─────────────────────────────────────
export const WA_NUMBER = '5511999999999'

export function waLink(procedure) {
  const msg = `Olá, Dra. Larissa! Gostaria de agendar uma avaliação para ${procedure}.`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

// ─── Dados completos de cada procedimento ────────────────────────────────────
export const PROCEDURES_DATA = {

  'blefaroplastia-superior': {
    slug: 'blefaroplastia-superior',
    tag: 'Laser',
    name: 'Blefaroplastia Superior a laser',
    hook: 'Seus olhos parecem cansados mesmo depois de dormir bem?',
    heroDesc:
      'A blefaroplastia superior remove o excesso de pele da pálpebra com cortes a laser — cicatriz imperceptível, recuperação mais rápida e resultado que devolve a leveza natural do olhar.',

    forWho: [
      { symptom: 'Pálpebra pesada ou caída', detail: 'A pele excedente toca os cílios ou sobrepõe a pálpebra, fechando o olho.' },
      { symptom: 'Olhar cansado constante', detail: 'Independente de quanto você dormiu, o olhar parece pesado e sem vida.' },
      { symptom: 'Campo visual reduzido', detail: 'O excesso de pele estreita a visão periférica superior, atrapalhando o dia a dia.' },
      { symptom: 'Dificuldade ao se maquiar', detail: 'A pele extra impede a aplicação de maquiagem na pálpebra móvel.' },
    ],

    steps: [
      { num: '01', title: 'Avaliação individualizada', desc: 'Análise detalhada da anatomia das suas pálpebras, tônus muscular, histórico de saúde e expectativas estéticas.' },
      { num: '02', title: 'Planejamento das incisões', desc: 'Marcação precisa dentro da dobra natural da pálpebra — a cicatriz ficará escondida mesmo com os olhos abertos.' },
      { num: '03', title: 'Cirurgia com laser', desc: 'O laser substitui o bisturi: incisão mais precisa, menor sangramento, menos hematomas e recuperação significativamente mais rápida.' },
      { num: '04', title: 'Acompanhamento pós-operatório', desc: 'Retornos programados para garantir a melhor cicatrização e o resultado mais natural possível.' },
    ],

    benefits: [
      'Olhar visualmente mais jovem e descansado',
      'Cicatriz na dobra natural (imperceptível)',
      'Melhora do campo visual nos casos funcionais',
      'Resultado natural — sem aparência operada',
      'Anestesia local com sedação leve, sem internação',
      'Resultado definitivo e de longa duração',
    ],

    recovery: [
      { period: '1ª semana', icon: '🌙', desc: 'Hematomas e inchaço esperados. Repouso e compressas frias. Evitar esforço físico.' },
      { period: '2ª semana', icon: '🌤', desc: 'Redução significativa do inchaço. Retorno às atividades leves e ao trabalho de escritório.' },
      { period: '1º mês', icon: '☀️', desc: 'Aparência natural e discreta. Cicatriz em fase de maturação, ainda em processo.' },
      { period: '3 a 6 meses', icon: '✨', desc: 'Resultado final consolidado. Cicatriz praticamente invisível. Olhar renovado.' },
    ],

    faq: [
      { q: 'A cirurgia deixa cicatriz visível?', a: 'Não. A incisão é feita exatamente na dobra natural da pálpebra. Após a cicatrização completa, torna-se praticamente imperceptível, mesmo com maquiagem.' },
      { q: 'Quanto tempo dura o resultado?', a: 'O resultado é definitivo: a pele removida não volta. O processo natural de envelhecimento continua, mas a aparência melhorada se mantém por décadas.' },
      { q: 'Precisa de internação?', a: 'Não. É realizada em ambiente ambulatorial com anestesia local e sedação leve. Alta no mesmo dia, poucas horas após o procedimento.' },
    ],
  },

  'blefaroplastia-inferior': {
    slug: 'blefaroplastia-inferior',
    tag: 'Laser',
    name: 'Blefaroplastia Inferior a laser',
    hook: 'As bolsas abaixo dos olhos revelam um cansaço que você não sente.',
    heroDesc:
      'A blefaroplastia inferior corrige bolsas de gordura e o excesso de pele abaixo dos olhos com precisão laser — devolvendo um contorno jovem e descansado que combina com quem você realmente é.',

    forWho: [
      { symptom: 'Bolsas persistentes abaixo dos olhos', detail: 'Saliências de gordura que aparecem independente do sono ou da hidratação.' },
      { symptom: 'Olheiras estruturais', detail: 'Sulcos profundos ou sombras que nenhum corretivo disfarça completamente.' },
      { symptom: 'Pele flácida na pálpebra inferior', detail: 'Excesso de pele que forma rugas e dobras abaixo do olho.' },
      { symptom: 'Aspecto envelhecido do olhar', detail: 'A região inferior dos olhos envelhece o rosto mesmo quando o restante está jovem.' },
    ],

    steps: [
      { num: '01', title: 'Avaliação da anatomia', desc: 'Análise do tipo de bolsa (gordura ou fluido), qualidade da pele e estrutura óssea para definir a melhor abordagem.' },
      { num: '02', title: 'Escolha da via de acesso', desc: 'Incisão externa (com remoção de pele) ou transconjuntival (sem corte visível), conforme o caso de cada paciente.' },
      { num: '03', title: 'Procedimento com laser', desc: 'O laser garante precisão na remoção ou redistribuição da gordura, com mínimo sangramento e recuperação mais confortável.' },
      { num: '04', title: 'Pós-operatório monitorado', desc: 'Acompanhamento próximo para garantir resultado harmônico e cicatrização ideal.' },
    ],

    benefits: [
      'Eliminação das bolsas de gordura',
      'Contorno inferior dos olhos rejuvenescido',
      'Pele mais lisa e firme abaixo dos olhos',
      'Resultado natural, sem aspecto tenso',
      'Possível via transconjuntival (sem cicatriz externa)',
      'Melhora significativa do aspecto geral do rosto',
    ],

    recovery: [
      { period: '1ª semana', icon: '🌙', desc: 'Hematomas e inchaço na região inferior. Compressas frias e repouso com cabeça elevada.' },
      { period: '2ª semana', icon: '🌤', desc: 'Melhora visível. Possível retorno ao trabalho com alguns cuidados estéticos.' },
      { period: '1º mês', icon: '☀️', desc: 'Contorno bem definido. Cicatriz (se externa) em maturação e já discreta.' },
      { period: '3 a 6 meses', icon: '✨', desc: 'Resultado final. Região abaixo dos olhos renovada, jovem e natural.' },
    ],

    faq: [
      { q: 'Existe cicatriz visível?', a: 'Depende da via de acesso. Na via transconjuntival (incisão interna), não há cicatriz externa. Na via externa, a incisão fica na linha de cílios inferiores, tornando-se imperceptível após cicatrização.' },
      { q: 'Resolve as olheiras roxas também?', a: 'A blefaroplastia inferior trata bolsas e excesso de pele. Olheiras vasculares (manchas roxas) podem requerer tratamentos complementares, avaliados individualmente.' },
      { q: 'Pode ser feita junto com a blefaroplastia superior?', a: 'Sim. A blefaroplastia estruturada combina os dois procedimentos em uma única cirurgia, com resultado ainda mais completo.' },
    ],
  },

  'blefaroplastia-estruturada': {
    slug: 'blefaroplastia-estruturada',
    tag: 'Laser',
    name: 'Blefaroplastia Estruturada a laser',
    hook: 'Quando o cansaço está em cima e embaixo dos olhos ao mesmo tempo.',
    heroDesc:
      'A blefaroplastia estruturada é o procedimento mais completo para o rejuvenescimento do olhar: combina a correção das pálpebras superior e inferior em uma única cirurgia, com redistribuição de gordura e resultado verdadeiramente harmonioso.',

    forWho: [
      { symptom: 'Pálpebras superiores e inferiores comprometidas', detail: 'Excesso de pele na parte de cima e bolsas ou flacidez embaixo ao mesmo tempo.' },
      { symptom: 'Rejuvenescimento global do olhar', detail: 'Quem quer transformar a região dos olhos de forma completa e duradoura.' },
      { symptom: 'Perda de volume nas pálpebras', detail: 'Olhar encovado ou com volume mal distribuído, que pode ser redistribuído durante a cirurgia.' },
      { symptom: 'Uma única recuperação', detail: 'Preferência por resolver tudo de uma vez, com apenas um período de pós-operatório.' },
    ],

    steps: [
      { num: '01', title: 'Planejamento cirúrgico integrado', desc: 'Avaliação completa das quatro pálpebras, harmonia facial e definição do plano cirúrgico personalizado.' },
      { num: '02', title: 'Cirurgia superior com laser', desc: 'Remoção do excesso de pele superior com incisão na dobra natural da pálpebra.' },
      { num: '03', title: 'Correção inferior com laser', desc: 'Remoção ou redistribuição da gordura das pálpebras inferiores, com ou sem retirada de pele.' },
      { num: '04', title: 'Acompanhamento detalhado', desc: 'Protocolo pós-operatório completo para garantir a melhor recuperação e resultado final.' },
    ],

    benefits: [
      'Rejuvenescimento completo da região dos olhos',
      'Resultado mais harmonioso que procedimentos separados',
      'Apenas um período de recuperação',
      'Redistribuição de volume para olhar natural',
      'Cicatrizes discritas na dobra natural e linha de cílios',
      'Transformação expressiva com resultado sutil e elegante',
    ],

    recovery: [
      { period: '1ª semana', icon: '🌙', desc: 'Maior inchaço e hematomas por envolver as quatro pálpebras. Repouso rigoroso e compressas.' },
      { period: '2ª semana', icon: '🌤', desc: 'Melhora progressiva. Possível retorno a atividades leves ao final da semana.' },
      { period: '1º mês', icon: '☀️', desc: 'Resultado já visível e bastante satisfatório. Cicatrizes em maturação.' },
      { period: '3 a 6 meses', icon: '✨', desc: 'Resultado final. Olhar completamente renovado, harmonioso e natural.' },
    ],

    faq: [
      { q: 'Quanto tempo dura a cirurgia?', a: 'Em média de 1h30 a 2h30, dependendo da complexidade de cada caso. É realizada em ambiente ambulatorial, com alta no mesmo dia.' },
      { q: 'O resultado é muito exagerado?', a: 'Não. O objetivo da blefaroplastia estruturada é um resultado harmonioso: transformador o suficiente para rejuvenescer, sutil o suficiente para não parecer operado.' },
      { q: 'Vale mais a pena fazer junto ou separado?', a: 'Para a maioria dos casos, fazer as duas pálpebras juntas traz resultado mais harmônico, apenas um período de recuperação e custo global menor.' },
    ],
  },

  'ptose-palpebral': {
    slug: 'ptose-palpebral',
    tag: 'Cirurgia',
    name: 'Correção de Ptose Palpebral',
    hook: 'A pálpebra caída não é apenas estética — ela pode comprometer sua visão.',
    heroDesc:
      'A ptose palpebral é a queda da pálpebra superior por fraqueza do músculo elevador. A correção cirúrgica restaura a posição normal da pálpebra, recuperando o campo visual e devolvendo a expressão natural do olhar.',

    forWho: [
      { symptom: 'Pálpebra que cobre parcialmente a pupila', detail: 'A pálpebra caída interfere diretamente na visão, bloqueando parte do campo visual superior.' },
      { symptom: 'Esforço para manter os olhos abertos', detail: 'Sensação de peso nas pálpebras, necessidade de levantar a sobrancelha ou inclinar a cabeça para enxergar melhor.' },
      { symptom: 'Assimetria entre as pálpebras', detail: 'Uma pálpebra nitidamente mais caída que a outra, gerando aspecto de olhar "apagado" de um lado.' },
      { symptom: 'Ptose congênita ou adquirida', detail: 'Presente desde o nascimento ou surgida ao longo dos anos por envelhecimento, trauma ou uso prolongado de lentes de contato.' },
    ],

    steps: [
      { num: '01', title: 'Diagnóstico preciso', desc: 'Avaliação do grau de ptose, função do músculo elevador e impacto visual — essencial para escolher a técnica correta.' },
      { num: '02', title: 'Escolha da técnica cirúrgica', desc: 'Ressecção do músculo elevador, plicatura ou suspensão frontal — definida de acordo com a causa e gravidade da ptose.' },
      { num: '03', title: 'Cirurgia sob anestesia local', desc: 'Procedimento ambulatorial, com precisão para reposicionar a pálpebra na altura correta e garantir simetria entre os olhos.' },
      { num: '04', title: 'Ajustes e acompanhamento', desc: 'O pós-operatório inclui avaliações frequentes para monitorar o resultado e garantir a melhor simetria possível.' },
    ],

    benefits: [
      'Recuperação do campo visual obstruído',
      'Simetria entre as pálpebras',
      'Eliminação do esforço para manter os olhos abertos',
      'Melhora expressiva da autoestima e da expressão facial',
      'Pode ter cobertura de planos de saúde (casos funcionais)',
      'Resultado definitivo e estável',
    ],

    recovery: [
      { period: '1ª semana', icon: '🌙', desc: 'Inchaço e hematoma esperados. A pálpebra pode parecer excessivamente elevada no início — é normal.' },
      { period: '2ª semana', icon: '🌤', desc: 'Estabilização progressiva da posição da pálpebra. Melhora visível do inchaço.' },
      { period: '1º mês', icon: '☀️', desc: 'Resultado bem definido. Pequenos ajustes de simetria podem ser avaliados nesta fase.' },
      { period: '3 a 6 meses', icon: '✨', desc: 'Resultado final consolidado. Pálpebra estável, simétrica e com abertura natural.' },
    ],

    faq: [
      { q: 'A cirurgia tem cobertura de plano de saúde?', a: 'Em casos onde a ptose compromete a visão (funcional), muitos planos cobrem o procedimento. A Dra. Larissa orienta sobre a documentação necessária na consulta.' },
      { q: 'A pálpebra pode cair novamente?', a: 'Com a técnica adequada ao tipo de ptose, o resultado é estável e duradouro. Casos raros de recidiva existem, mas são manejáveis com acompanhamento.' },
      { q: 'Crianças podem fazer?', a: 'Sim. A ptose congênita em crianças pode requerer correção precoce para evitar ambliopia (olho preguiçoso). A Dra. Larissa avalia cada caso individualmente.' },
    ],
  },

  'lifting-supercilios': {
    slug: 'lifting-supercilios',
    tag: 'Cirurgia',
    name: 'Lifting de Supercílios',
    hook: 'Quando a sobrancelha caída envelhece o rosto mais do que você imagina.',
    heroDesc:
      'O lifting de supercílios reposiciona a sobrancelha em uma altura mais jovem e harmônica, abrindo o olhar e rejuvenescendo o terço superior do rosto — sem alterar a expressão ou a identidade do seu rosto.',

    forWho: [
      { symptom: 'Sobrancelhas visivelmente caídas', detail: 'As sobrancelhas desceram com o tempo, dando aspecto pesado e envelhecido ao terço superior do rosto.' },
      { symptom: 'Expressão de seriedade involuntária', detail: 'O posicionamento baixo das sobrancelhas cria aparência de raiva ou tristeza mesmo quando o rosto está relaxado.' },
      { symptom: 'Olhar pesado mesmo após blefaroplastia', detail: 'Em alguns casos, a queda é das sobrancelhas — não das pálpebras — e precisa ser corrigida na origem.' },
      { symptom: 'Assimetria entre as sobrancelhas', detail: 'Uma sobrancelha nitidamente mais baixa que a outra, gerando desequilíbrio facial.' },
    ],

    steps: [
      { num: '01', title: 'Avaliação do posicionamento ideal', desc: 'Análise do arco, altura e posição das sobrancelhas em relação à anatomia do seu rosto para definir o resultado mais harmônico.' },
      { num: '02', title: 'Escolha da técnica', desc: 'Lifting endoscópico, coronal ou temporal — a técnica é escolhida conforme o grau de queda e a estrutura do rosto.' },
      { num: '03', title: 'Procedimento cirúrgico', desc: 'Reposicionamento e fixação da sobrancelha na altura ideal, com incisões discretas no couro cabeludo ou linha de implantação.' },
      { num: '04', title: 'Pós-operatório e resultado', desc: 'Acompanhamento para garantir a fixação correta e o resultado mais natural e simétrico possível.' },
    ],

    benefits: [
      'Sobrancelhas reposicionadas em altura jovem e harmônica',
      'Abertura expressiva do olhar',
      'Expressão facial mais suave e acolhedora',
      'Rejuvenescimento do terço superior do rosto',
      'Resultado natural — não parece "esticado"',
      'Pode ser combinado com blefaroplastia para resultado completo',
    ],

    recovery: [
      { period: '1ª semana', icon: '🌙', desc: 'Inchaço e tensão na região da testa e sobrancelhas. Cabelo cobre as incisões. Repouso recomendado.' },
      { period: '2ª semana', icon: '🌤', desc: 'Redução do inchaço. Possível retorno ao trabalho com cuidados simples.' },
      { period: '1º mês', icon: '☀️', desc: 'Posicionamento estabilizado. Expressão mais natural e resultado bem definido.' },
      { period: '3 a 6 meses', icon: '✨', desc: 'Resultado final. Rosto com aparência jovem, natural e em harmonia.' },
    ],

    faq: [
      { q: 'O lifting deixa a expressão artificial?', a: 'Não, quando bem planejado. A Dra. Larissa analisa cuidadosamente a posição ideal para cada rosto — o objetivo é elevar sem exagerar, preservando a expressão natural.' },
      { q: 'Pode ser feito junto com a blefaroplastia?', a: 'Sim. A combinação dos dois procedimentos em uma única cirurgia é frequentemente recomendada para um resultado mais completo e harmonioso.' },
      { q: 'As incisões ficam visíveis?', a: 'As incisões são feitas no couro cabeludo ou na linha de implantação do cabelo, ficando escondidas pelo próprio cabelo após a cicatrização.' },
    ],
  },

  'ressurfacing-laser': {
    slug: 'ressurfacing-laser',
    tag: 'Laser',
    name: 'Ressurfacing palpebral com laser de CO₂',
    hook: 'As rugas finas ao redor dos olhos têm tratamento sem cirurgia.',
    heroDesc:
      'O ressurfacing palpebral com laser de CO₂ fracionado renova a superfície da pele das pálpebras — eliminando rugas finas, manchas e textura irregular de forma precisa, controlada e com recuperação programada.',

    forWho: [
      { symptom: 'Rugas finas ao redor dos olhos', detail: '"Pés de galinha" e linhas de expressão que aparecem mesmo em repouso.' },
      { symptom: 'Pele ressecada e com textura irregular', detail: 'A pele das pálpebras perdeu qualidade, com aspecto enrugado e sem brilho natural.' },
      { symptom: 'Manchas e irregularidades de pigmentação', detail: 'Manchas senis ou de fotoenvelhecimento na região palpebral.' },
      { symptom: 'Complemento pós-blefaroplastia', detail: 'Para quem já fez a cirurgia e quer refinar ainda mais a qualidade da pele das pálpebras.' },
    ],

    steps: [
      { num: '01', title: 'Avaliação da qualidade da pele', desc: 'Análise do grau de fotoenvelhecimento, tipo de pele, manchas e rugosidade para calibrar os parâmetros do laser.' },
      { num: '02', title: 'Preparo da pele', desc: 'Protocolo de preparo pré-laser para minimizar riscos e potencializar o resultado, especialmente em peles mais escuras.' },
      { num: '03', title: 'Aplicação do laser de CO₂', desc: 'O laser fracionado remove a camada superficial da pele de forma controlada, estimulando a produção de colágeno e a renovação celular.' },
      { num: '04', title: 'Cuidados pós-laser', desc: 'Protocolo específico de hidratação, proteção solar e acompanhamento para garantir a melhor cicatrização e resultado.' },
    ],

    benefits: [
      'Suavização expressiva das rugas finas',
      'Melhora da textura e qualidade da pele',
      'Redução de manchas e irregularidades',
      'Estímulo à produção de colágeno',
      'Resultado progressivo e duradouro',
      'Pode ser combinado com procedimentos cirúrgicos',
    ],

    recovery: [
      { period: '1ª semana', icon: '🌙', desc: 'Vermelhidão intensa, descamação e sensação de queimação leve. Cuidados rigorosos com hidratação e proteção.' },
      { period: '2ª semana', icon: '🌤', desc: 'Descamação cede. Pele avermelhada ainda, mas bem mais confortável. Maquiagem leve possível.' },
      { period: '1º mês', icon: '☀️', desc: 'Pele claramente renovada. Vermelhidão residual que disfarça facilmente com base leve.' },
      { period: '3 a 6 meses', icon: '✨', desc: 'Resultado final: pele das pálpebras mais jovem, lisa e luminosa. Colágeno em plena produção.' },
    ],

    faq: [
      { q: 'É doloroso?', a: 'O procedimento é realizado com anestesia tópica e/ou local. Durante o processo há sensação de calor — após, o desconforto é semelhante a uma queimadura solar leve, manejável com medicação.' },
      { q: 'Funciona em todos os tipos de pele?', a: 'A técnica pode ser adaptada, mas requer avaliação cuidadosa em peles mais escuras (Fitzpatrick IV-VI) para evitar manchas. O preparo pré-laser é fundamental nesses casos.' },
      { q: 'Quantas sessões são necessárias?', a: 'Em geral, uma única sessão com laser ablativo fracionado já entrega resultado expressivo. Casos mais leves podem se beneficiar de protocolos não-ablativos com múltiplas sessões.' },
    ],
  },

  'toxina-botulinica': {
    slug: 'toxina-botulinica',
    tag: 'Estético',
    name: 'Toxina botulínica nas pálpebras',
    hook: 'Um músculo relaxado no lugar certo transforma completamente o olhar.',
    heroDesc:
      'A aplicação de toxina botulínica nas pálpebras vai além do combate às rugas: quando feita com precisão anatômica, ela suaviza linhas, eleva o olhar, trata espasmos e melhora condições funcionais — com resultado natural e sem tempo de recuperação.',

    forWho: [
      { symptom: '"Pés de galinha" e rugas ao redor dos olhos', detail: 'Linhas de expressão que aparecem ao sorrir ou franzir os olhos e incomodam na foto e no espelho.' },
      { symptom: 'Blefarospasmo', detail: 'Contração involuntária e repetitiva da pálpebra, que interfere na visão e no conforto visual.' },
      { symptom: 'Olhar caído por hiperfunção muscular', detail: 'O músculo orbicular excessivamente ativo "puxa" a pálpebra para baixo — a toxina equilibra esse tônus.' },
      { symptom: 'Spasmo hemifacial na região ocular', detail: 'Contrações involuntárias de um lado do rosto, tratadas com aplicação funcional de toxina.' },
    ],

    steps: [
      { num: '01', title: 'Avaliação funcional e estética', desc: 'Análise da musculatura periocular, padrão de contração, queixas funcionais e objetivos estéticos do paciente.' },
      { num: '02', title: 'Mapeamento dos pontos de aplicação', desc: 'Definição precisa dos pontos de injeção para resultado natural, sem comprometer a expressão ou a função ocular.' },
      { num: '03', title: 'Aplicação com agulha ultrafina', desc: 'Procedimento rápido (15-20 minutos), com mínimo desconforto. Sem necessidade de anestesia na maioria dos casos.' },
      { num: '04', title: 'Acompanhamento do resultado', desc: 'Retorno em 2 semanas para avaliar o resultado e fazer ajustes finos se necessário.' },
    ],

    benefits: [
      'Suavização de rugas e "pés de galinha"',
      'Elevação sutil do olhar (efeito brow lift leve)',
      'Tratamento do blefarospasmo e espasmo hemifacial',
      'Sem tempo de recuperação — retorno imediato',
      'Resultado progressivo em 7 a 14 dias',
      'Procedimento rápido e de baixo desconforto',
    ],

    recovery: [
      { period: 'Mesmo dia', icon: '🌙', desc: 'Retorno imediato às atividades. Evitar massagear a área, atividade física intensa e calor excessivo por 24h.' },
      { period: '3 a 5 dias', icon: '🌤', desc: 'Início de ação da toxina. Primeiros efeitos visíveis de suavização e relaxamento muscular.' },
      { period: '7 a 14 dias', icon: '☀️', desc: 'Resultado completo estabelecido. Retorno para avaliação e possível complementação.' },
      { period: '4 a 6 meses', icon: '✨', desc: 'Duração do efeito. Nova aplicação recomendada para manutenção do resultado.' },
    ],

    faq: [
      { q: 'A expressão fica artificial ou "congelada"?', a: 'Não, quando aplicada com técnica correta e dose adequada. A Dra. Larissa prioriza um resultado natural, que suaviza sem paralisar a expressão.' },
      { q: 'Pode ser combinada com outros procedimentos?', a: 'Sim. A toxina botulínica combina muito bem com ressurfacing laser, preenchimentos e procedimentos cirúrgicos, potencializando e prolongando os resultados.' },
      { q: 'O tratamento funcional tem cobertura de plano?', a: 'O blefarospasmo e o espasmo hemifacial podem ter cobertura de plano de saúde. A Dra. Larissa orienta sobre a documentação e laudo necessários.' },
    ],
  },
}

export const PROCEDURE_SLUGS = Object.keys(PROCEDURES_DATA)
