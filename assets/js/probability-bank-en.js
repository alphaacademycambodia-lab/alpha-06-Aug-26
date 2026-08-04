/* Alpha Academy Cambodia — probability exercises, English layer
   ---------------------------------------------------------------------------
   The Khmer text lives in probability-bank.js and is the original. This file
   is an overlay keyed on the same exercise number `n`, so the two never drift
   apart: nothing here changes an exercise, it only says it in English.

     { q: 'the stem', p: [ 'part', { t: 'part', s: ['sub', 'sub'] } ] }

   Parts line up with the Khmer `p` array position for position. An exercise
   with no entry here simply shows in Khmer — the page falls back rather than
   showing a blank.                                                          */
(function (global) {
  'use strict';

  global.PROB_BANK_EN = {

    1: { q: 'A Grade 12 mathematics examination paper contains 6 algebra questions and 6 geometry questions. Each candidate must do 2 questions out of these 10, chosen freely. Find the probability of each event:',
         p: ['A: student X picks two algebra questions.',
             'B: student Y picks two geometry questions.',
             'C: student Z picks one algebra question and one geometry question.'] },

    2: { q: 'The digits 0 to 9 are used to write 4-digit numbers, where the first digit may not be 0.',
         p: ['How many different numbers can be written this way?',
             'How many of them have all 4 digits different?',
             'How many of them have all 4 digits the same?'] },

    3: { q: 'Of 20 oranges on sale, 16 are sweet and the other 4 are sour. A customer picks 3 oranges at random. Find the probability of each event:',
         p: ['A: all 3 oranges are sour.',
             'B: all 3 oranges are sweet.',
             'C: at least 1 orange is sweet.'] },

    4: { q: 'A border-patrol commander creates a secret code that is a 3-digit whole number with all three digits different, using the digits 1 to 9. He picks one code at random for use during an operation. Find the probability of each event:',
         p: ['A: the code is an even number.',
             'B: the code is an odd number.',
             'C: the code is a multiple of 6 but not an even number.'] },

    5: { q: 'A tourist group of 3 men and 5 women line up in a random order to buy tickets for Angkor Wat. Find the probability of each event:',
         p: ['A: the tourist at the front of the queue is a woman.',
             'B: all the men stand next to each other.',
             'C: all the men stand next to each other and all the women stand next to each other.'] },

    6: { q: 'A bag holds 8 red pens and 6 blue pens. Five pens are drawn together at random. Find the probability of each event:',
         p: ['A: "all 5 pens are red".',
             'B: "3 pens are red and 2 are blue".',
             'C: "at least 1 of the 5 pens is blue".'] },

    7: { q: 'A 3-digit number is to be formed with all three digits different, using the digits 1, 2, 3, 4, 5, 6, 7, 8, 9. Find the probability of each event:',
         p: ['A: the 3-digit number is a multiple of 5.',
             'B: the 3-digit number is even.',
             'C: the 3-digit number is even and greater than 500.'] },

    8: { q: 'A box holds 2 white marbles numbered 1 and 2, and 3 blue marbles numbered 1, 2 and 3. Two marbles are drawn together at random from the box.',
         p: ['Find the probability of event A: "the two marbles are the same colour".',
             'Find the probability of event B: "the numbers on the two marbles add up to 3".',
             'Find the probability of event C: "the numbers add up to 3, given that the two marbles are the same colour".'] },

    9: { q: 'A box holds 7 quinine tablets and 5 aspirin tablets. Four tablets are drawn from the box at random.',
         p: ['A: find the probability that all 4 are quinine.',
             'B: find the probability that at least 1 is aspirin.',
             'C: find the probability that at least 2 are aspirin.'] },

    10: { q: 'A class has 50 students. A survey of all 50 shows that 30 like mathematics, 25 like physics, and 15 like both mathematics and physics.',
          p: ['Find how many students like mathematics or physics.',
              'Find how many students like neither mathematics nor physics.',
              'Find how many students like mathematics but not physics.'] },

    11: { q: 'A box holds 7 blue pens and 5 red pens. Four pens are drawn from the box at random.',
          p: ['A: find the probability that all 4 pens are blue.',
              'B: find the probability of drawing 3 blue pens and 1 red pen.',
              'C: find the probability of drawing at least 1 red pen.'] },

    12: { q: 'A bag holds 8 red balls and 6 black balls. Five balls are drawn together at random.',
          p: ['A: find the probability that all 5 balls are red.',
              'B: find the probability of drawing 3 red balls and 2 black balls.',
              'C: find the probability of drawing at least 1 black ball.'] },

    13: { q: 'A box contains 7 banknotes of 5,000 riel and 5 banknotes of 10,000 riel. Four notes are pulled from the box at random.',
          p: ['A: find the probability that all 4 notes are 5,000 riel.',
              'B: find the probability of getting at least one 10,000 riel note.',
              'C: find the probability of getting exactly 3 notes of 5,000 riel.'] },

    14: { q: 'A wallet contains 4 banknotes of 1,000 riel and 5 banknotes of 500 riel. Three notes are pulled from the wallet at random. Find the probability of each event:',
          p: ['A: all 3 notes are 1,000 riel.',
              'B: at least one 500 riel note is drawn.',
              'C: the total drawn is 2,000 riel.'] },

    15: { q: 'Box A holds 3 algebra books and 4 geometry books; box B holds 5 algebra books and 3 geometry books. One book is moved at random from A into B, then one book is moved at random from B back into A. Find the probability that the number of algebra books and of geometry books in each box is unchanged.',
          p: [] },

    16: { q: 'A form teacher picks 6 daily cleaning-duty leaders from a class of 20 boys and 15 girls. Find the probability of each event:',
          p: ['A: "all the leaders are boys".',
              'B: "all the leaders are girls".',
              'C: "the leaders are 3 boys and 3 girls".'] },

    17: { q: 'A drawer holds 7 mathematics books and 5 Khmer-language books. A student takes 4 books together from the drawer at random. Find the probability of each event:',
          p: ['A: "the student takes all 4 mathematics books".',
              'B: "the student takes at least 1 Khmer book".'] },

    18: { q: 'A box holds 5 blue pencils and 4 red pencils. A student takes 3 pencils together from the box at random. Find the probability of each event:',
          p: ['A: "the student takes 2 blue pencils and 1 red pencil".',
              'B: "the pencils taken are all the same colour".',
              'C: "the student takes at least 2 blue pencils".'] },

    19: { q: 'An aquarium holds 4 red fish and 3 white fish. Two fish are moved at random into a new tank. Find the probability of each event:',
          p: ['A: "both fish are red".',
              'B: "both fish are white".',
              'C: "one fish of each colour".'] },

    20: { q: 'A drum holds 4 red balls, 3 white balls and 1 blue ball. Three balls are drawn at the same time at random. Find the probability of each event:',
          p: ['A: "two red balls and one that is not red".',
              'B: "all three balls are red".',
              'C: "at least two red balls".'] },

    21: { q: 'A bag holds 3 white marbles and 5 blue marbles. Two marbles are drawn at the same time at random. Find the probability of each event:',
          p: ['A: "both marbles are blue".',
              'B: "one marble of each colour".'] },

    22: { q: 'A box holds 3 red marbles and 5 blue marbles. Two marbles are drawn at the same time at random. Find the probability of each event:',
          p: ['A: "both marbles are red".',
              'B: "both marbles are blue".',
              'C: "one marble of each colour".'] },

    23: { q: 'A bag holds 3 white balls and 6 red balls. Three balls are drawn at the same time at random. Find the probability of each event:',
          p: ['A: "all three balls are white".',
              'B: "all three balls are red".',
              'C: "one red ball and two white balls".'] },

    24: { q: 'A class of 15 students has 9 boys and 6 girls. Three students are chosen at random as representatives for an interview. Find the probability of each event:',
          p: ['A: "all 3 students are girls".',
              'B: "all 3 students are boys".',
              'C: "exactly 2 of the 3 students are girls".'] },

    25: { q: 'A bag holds 10 balls: 5 yellow ones numbered 1 to 5, 3 red ones numbered 1 to 3, and 2 white ones numbered 1 to 2. One ball is drawn from the bag at random. Find the probability of each event:',
          p: ['A: "the ball drawn is yellow".',
              'B: "the ball drawn carries the number 2".',
              'C: "the ball drawn is red and carries the number 1".'] },

    26: { q: 'A bag holds 3 marbles marked a, b and c. A marble is drawn twice, one at a time, and put back each time.',
          p: ['Write down the sample space S and the events A: "the two marbles are different" and B: "marble b is drawn first".',
              'Find P(A), P(B), P(A∩B) and P(A∪B).'] },

    27: { q: 'A drum holds 12 balls numbered 1 to 12. Three balls are drawn together at random.',
          p: ['Find the probability that "all 3 numbers are divisible by 3".',
              'Find the probability that "exactly one number is divisible by 3".',
              'Find the probability that "the three numbers, in increasing order, form an arithmetic sequence with common difference d = 3".'] },

    28: { q: 'A class has 4 Asian students, 2 African students and 3 European students. They are put into study groups of 3 at random. Find the probability of each event below:',
          p: ['"at least 2 of the students are Asian"',
              '"at least 2 of the students are European"',
              '"one student from each continent".'] },

    29: { q: 'A sack holds 3 white balls, 3 blue balls and 2 red balls. Three balls are drawn at the same time at random, every ball being equally likely. Find the probability of each event:',
          p: ['A "at least 2 blue balls"',
              'B "all 3 balls are different colours".'] },

    30: { q: 'A bag holds 15 balls: 7 green ones numbered 1 to 7, 5 blue ones numbered 1 to 5, and 3 red ones numbered 1 to 3. One ball is drawn from the bag at random. Find the probability of each event below:',
          p: ['A: the ball drawn is green',
              'B: the ball drawn carries an odd number',
              'C: the ball drawn is green and carries an odd number.'] },

    31: { q: 'A class has 10 top students, of whom 4 are girls and 6 are boys. Groups of 4 are formed at random to compete against another class. Find the probability of each event:',
          p: ['A: "the group chosen is all girls"',
              'B: "the group chosen is all boys"',
              'C: "50% of the group chosen are boys".'] },

    32: { q: 'A bag holds 2 white marbles, 4 red marbles and 4 blue marbles. Three marbles are drawn together at random. Find the probability of each event below:',
          p: ['A: "all 3 marbles are red"',
              'B: "at least 2 marbles are blue"',
              'C: "all 3 marbles are different colours".'] },

    33: { q: 'A bag holds 16 balls numbered 1 to 16. Three balls are drawn from the bag at random. Find the probability of each event:',
          p: ['A: "all three numbers are divisible by 4"',
              'B: "none of the three numbers is divisible by 5"',
              'C: "exactly one number is divisible by 4".'] },

    34: { q: 'A bag holds 2 red marbles, 3 blue marbles and 4 white marbles. Three marbles are drawn from the bag at random. Find the probability of each event:',
          p: ['A: "all 3 marbles are white"',
              'B: "all 3 marbles are different colours".'] },

    35: { q: 'A health centre has 9 female staff and 5 male staff. Work teams of 4 are formed at random to visit the villages. Find the probability of each event:',
          p: ['A: "all 4 members of the team are women"',
              'B: "50% of the team are women".'] },

    36: { q: 'A ruler seller has 25 flat plastic rulers, 3 of which are chipped at the end. One ruler is picked at random from the 25.',
          p: ['Find the probability of event A: "the ruler picked is not chipped".',
              'A buyer picks without checking and definitely wants 7 good rulers. What is the smallest number of rulers he must buy?',
              'Two rulers are now picked at random from the 25. Find the probability of event B: "neither ruler is chipped".'] },

    37: { q: 'An international school class has 24 students: 3 are English, 2 are French, 5 are Chinese, 4 are Korean and 10 are Khmer. Three students are chosen at random to represent the class in a programme. Find the probability of all three events:',
          p: ['A: "all 3 students are from Europe"',
              'B: "all 3 students are from Asia but none is Khmer"',
              'C: "one student is Khmer, one is European and one is Asian but not Khmer".'] },

    38: { q: 'A student committee of 4 is to be formed — a president, a vice-president, a secretary and one ordinary member — to help run the school. The committee is chosen from 10 students.',
          p: ['Find the probability of event A: "the committee has Sok as secretary".',
              'Find the probability of event B: "the committee has Dara as president and Sok as secretary".',
              'Find the probability of event C: "the committee contains none of Dara, Sok and Sophorn".'] },

    39: { q: 'A 3-digit number with all digits different is to be formed from the digits 0, 1, 2, 3, 4 and 5.',
          p: ['Find the probability of event A: "the number formed is a multiple of 5".',
              'Find the probability of event B: "the number formed is even".',
              'Find the probability of event C: "the number formed is divisible by 3".'] },

    40: { q: 'A die is thrown twice.',
          p: ['Find the probability of event A: "the die shows the same number both times".',
              'Find the probability of event B: "the two numbers add up to 10".',
              'Find the probability of event C: "the two numbers add up to 10 or more".'] },

    41: { q: 'A sack holds 7 balls numbered 1 to 7. Two balls are drawn from the sack at random.',
          p: ['Find the probability of event A: "the two numbers add up to an even number".',
              'Find the probability of event B: "the two numbers add up to an odd number".',
              'Find the probability of event C: "the two numbers add up to a multiple of 3".'] },

    42: { q: 'A secret code is a 3-digit number with all digits different, formed from the digits 1 to 9, to be set on a lock.',
          p: ['Find the probability of event A: "the code is an even number".',
              'Find the probability of event B: "the code contains the digit 9".',
              'Find the probability of event C: "the code has 9 in the units place".'] },

    43: { q: 'A sack holds 4 white balls, 3 black balls and 5 red balls. Three balls are drawn from the sack at random.',
          p: ['Find the probability of event A: "the balls drawn are all the same colour".',
              'Find the probability of event B: "the balls drawn are all different colours".',
              'Find the probability of event C: "exactly 2 of the balls drawn are red".'] },

    44: { q: 'A die is thrown twice.',
          p: ['Write down the sample space of the outcomes of this experiment.',
              { t: 'Find the probability of each event',
                s: ['A: "the two throws show the same number"',
                    'B: "the numbers thrown are even"',
                    'C: "a 6 is thrown"',
                    'D: "the two numbers add up to 7".'] }] },

    45: { q: 'A coin has two faces, heads and tails, written H and T. The coin is tossed 4 times.',
          p: ['Write down the sample space of the outcomes of these tosses.',
              { t: 'Find the probability of each event',
                s: ['A: "all 4 tosses show the same face"',
                    'B: "exactly 2 tosses show H"',
                    'C: "the first toss shows H"',
                    'D: "at least 2 tosses show T".'] }] },

    46: { q: 'There are two sacks: sack 1 holds 2 red balls and 3 blue balls; sack 2 holds 2 red balls and 2 blue balls. One ball is drawn at random from sack 1. Take the events A: "the ball is drawn from sack 1", B: "the ball is drawn from sack 2" and R: "the ball drawn is red". Find the probabilities of R∩A and R∩B.',
          p: [] },

    47: { q: 'Balls numbered 1, 2, 3, 4, 5, 6 are rolled towards 6 holes also numbered 1, 2, 3, 4, 5, 6. Assume the 6 balls always land in the 6 different holes.',
          p: ['Find the probability of event A: "ball 3 lands in hole 3".',
              'Find the probability of event B: "every ball lands in the hole with its own number".'] },

    48: { q: 'Nine coins are numbered 1, 2, 3, 4, 5, 6, 7, 8, 9. Three coins are taken one at a time from a bag and laid out in order.',
          p: ['Find the probability of event A: "the 3 coins form the number 123".',
              'Find the probability of event B: "the 3 coins form a number divisible by 125".'] },

    49: { q: 'A company needs to recruit 5 staff. After the announcement, 10 graduates apply — 4 women and 6 men. Find the probability of each event:',
          p: ['A: "exactly one man is recruited"',
              'B: "only women are recruited"',
              'C: "at least 3 women are recruited".'] },

    50: { q: 'Teacher Chantha makes 9 number cards, each carrying a different digit from 1 to 9. To drill multiplication of single digits, each group of students draws 2 cards and multiplies the two numbers. Find the probability of each event:',
          p: ['A: "the two cards drawn give an odd product"',
              'B: "the two cards drawn give an even product".'] },

    51: { q: 'A 4-digit number with all digits different is to be formed from the digits 0, 1, 2, 3, 4.',
          p: ['Find the probability of event A: "the number formed is odd".',
              'Find the probability of event B: "the number formed is odd".',
              'Find the probability of event C: "the number formed is a multiple of 5".'] },

    52: { q: 'A private company needs to recruit 4 staff. During the recruitment period 14 people submit a CV: 8 women and 6 men. Find the probability of each event:',
          p: ['A: the company recruits 4 staff who are 50% women and 50% men.',
              'B: the company recruits 4 staff who are all women.',
              'C: the company recruits 4 staff including at least 1 man.'] },

    53: { q: 'There are two groups of students. Group 1 has 3 students who are strong in physics and 5 who are strong in mathematics. Group 2 has 6 students who are strong in physics and 2 who are strong in mathematics. One student is moved from group 1 into group 2, and one student is moved from group 2 back into group 1. Find the probability that:',
          p: ['A: group 1 has as many physics students as mathematics students.',
              'B: group 1 has three times as many mathematics students as physics students.',
              'C: the number of physics and mathematics students in each group is unchanged.'] },

    54: { q: 'A bag holds 1 white ball, 2 blue balls and 2 red balls. Drawing a white ball scores 1 point, a blue ball scores 2 points and a red ball scores 3 points.',
          p: [{ t: 'One ball is drawn from the bag at random. Find the probability of each event below:',
                s: ['A: a red ball is drawn.',
                    'B: at least two points are scored.'] },
              { t: 'Two balls are drawn from the bag at random. Find the probability of each event below:',
                s: ['A: the two balls are the same colour.',
                    'B: at least two points are scored.'] }] },

    55: { q: 'An egg seller has 20 duck eggs, of which 5 are rotten. Sok buys one egg from the seller at random.',
          p: ['Find the probability of event A: "Sok buys a good egg".',
              'If Sok buys 3 eggs from that seller, what is the probability, as a percentage, that all of them are good? Call this event B.',
              'If Sok wants 5 good eggs for certain, what is the smallest number of eggs he must buy?'] },

    56: { q: 'A drum holds 16 lottery tickets numbered 1 to 16. Three tickets are drawn together at random, every ticket being equally likely. Find the probability of each event:',
          p: ['A: all 3 numbers are multiples of 4',
              'B: exactly 2 of the numbers are prime',
              'C: one number is odd and two numbers are even.'] },

    57: { q: 'A box holds 5 red cards numbered 1 to 5 and 9 blue cards numbered 1 to 9. Two cards are drawn from the box at random. Find the probability of each event:',
          p: ['A: both cards are blue and their numbers are multiples of 3',
              'B: one red card with an even number and one blue card with an odd number.'] },

    58: { q: 'Nine candidates from three different provinces are put forward, and a team of 3 is to be chosen to supervise a mathematics olympiad room. Of the candidates, 4 are from Battambang, 2 from Prey Veng and 3 from Kampong Cham. Find the probability of each event:',
          p: ['A: at least 2 members are from Battambang.',
              'B: at least 2 members are from Kampong Cham.',
              'C: the members come from three different provinces.'] },

    59: { q: 'A jewellery display holds 3 bracelets, 3 rings, 7 necklaces and 7 chains. Four pieces are chosen at random from the display. Find the probability of each event below:',
          p: ['A: one piece of every kind is chosen',
              'B: all four pieces are of the same kind',
              'C: the 3 rings are chosen',
              'D: at least one necklace is chosen.'] },

    60: { q: 'A class has 16 trainee teachers, of whom 6 are staff and 10 are students. Groups of 4 are formed at random for the work the teacher sets. Find the probability of each event below:',
          p: ['A: the group formed is all staff.',
              'B: 50% of the group are staff.'] },

    61: { q: 'A class has 10 students, 6 boys and 4 girls. Groups of 4 are formed at random to enter a talent competition. Find the probability of each event below:',
          p: ['A: the group chosen is all girls.',
              'B: the group chosen is all boys.',
              'C: 70% of the group chosen are boys.',
              'D: the group chosen contains at least one boy.'] },

    62: { q: 'A committee of 5 members is to be formed from 12 people. Among them are two people, A and B, who may only join if both join together.',
          p: ['In how many ways can this committee be formed?',
              'Find the probability that A and B both end up on the committee.'] },

    63: { q: 'A box holds 2 white marbles numbered 1 and 2, and 3 blue marbles numbered 1, 2 and 3. Two marbles are drawn together at random from the box. Find the probability that:',
          p: ['A: the two marbles are the same colour.',
              'B: the numbers on the two marbles add up to 3.',
              'C: the numbers add up to 3, given that the marbles are the same colour.'] },

    64: { q: 'Of 20 light bulbs, 4 are dead (they do not light). Two bulbs are chosen at random. Find the probability that:',
          p: ['A: both bulbs are dead',
              'B: neither bulb is dead',
              'C: exactly one bulb is dead',
              'D: at least one bulb is dead.'] },

    65: { q: 'A bag holds 4 marbles: one red, one green, one blue and one yellow. Two marbles are drawn one after the other, each being put back before the next draw.',
          p: ['Find the number of outcomes possible in this experiment.',
              'Let A be the event of drawing two marbles of different colours. Find P(A).',
              'Let B be the event of drawing at least one red marble. Find P(B).'] },

    66: { q: 'A wallet holds 12 banknotes: 5 notes of 10,000 riel, 4 notes of 5,000 riel and 3 notes of 2,000 riel. Four notes are drawn together at random. Find the probability of each event below:',
          p: ['A: exactly one 2,000 riel note is drawn',
              'B: the notes drawn total 30,000 riel',
              'C: the notes drawn give the largest possible total.'] },

    67: { q: 'This exercise has two independent parts:',
          p: [{ t: 'A box holds 20 marbles: 10 white, 6 red and 4 blue. Five marbles are drawn at random. Find the probability of each event:',
                s: ['A: all 5 marbles drawn are white',
                    'B: 2 red marbles and 3 blue marbles are drawn',
                    'C: 1 white, 2 red and 2 blue marbles are drawn',
                    'D: the marbles drawn are white or red.'] },
              { t: 'A box holds 3 blue marbles and 2 yellow marbles. Two marbles are drawn at random, one at a time. Find the probability of drawing two blue marbles in each case below:',
                s: ['A: without replacement (the first marble is not put back before the second is drawn)',
                    'B: with replacement (the first marble is put back before the second is drawn).'] }] },

    68: { q: 'A bag holds 3 red balls, 4 blue balls and 5 black balls. Three balls are drawn together at random. Find the probability of each event:',
          p: ['A: the three balls are of different colours.',
              'B: exactly two balls are of the same colour.',
              'C: all three balls are of the same colour.'] },

    /* ---- the supplementary set --------------------------------------- */

    69: { q: 'How many different identity cards can be made if the card carries 6 digits and no digit is used more than once?',
          p: [] },

    70: { q: 'In how many ways can a class teacher choose 4 students out of 12 if every student gets the same task? In how many different ways can the teacher choose them if each student gets a different task?',
          p: [] },

    71: { q: 'In how many different ways can 7 flags be arranged if 3 of them are identical red flags, 2 are identical blue flags and 2 are identical white flags?',
          p: [] },

    72: { q: 'A coffee shop serves 12 different kinds of coffee. In how many ways can 4 different kinds be chosen?',
          p: [] },

    73: { q: 'In how many ways can 3 kinds of ice cream and 2 kinds of topping be chosen from a dessert buffet offering 10 kinds of ice cream and 6 kinds of topping?',
          p: [] },

    74: { q: 'Find the probability of choosing 3 science books and 4 mathematics books from 8 science books and 9 mathematics books, if the books are chosen at random.',
          p: [] },

    75: { q: 'Red cards and blue cards, each numbered 2 to 9, are put into a bag. Four cards are drawn at random without replacement. Find the probability that:',
          p: ['all 4 cards are red',
              '2 cards are red and 2 are blue',
              'at least 1 card is red',
              'all 4 cards are blue.'] },

    76: { q: 'A drawer holds 11 identical red socks and 8 identical blue socks. Suppose you pick 2 at random in the dark.',
          p: ['Find the probability of getting a matching red pair.',
              'Find the probability of getting a matching blue pair.',
              'Find the probability of getting 2 socks of different colours.'] },

    77: { q: 'A football club has 20 first-year students, 20 second-year students, 15 third-year students and 10 fourth-year students. Four players are chosen at random to be team captains. Find the probability that:',
          p: ['all 4 are fourth-year students',
              'there is one student from each year',
              '2 are second-year students and the rest are first-year students.'] },

    78: { q: 'A bag holds 9 red balls, 8 white balls and 6 blue balls. Two balls are drawn at random, one at a time, with replacement. Find the probability that:',
          p: ['the first ball is red and the second is white',
              'the two balls are the same colour',
              'the second ball is blue.'] },

    79: { q: 'A torch takes 6 batteries, 2 of which are dead. If 2 batteries are chosen at random, one at a time and without replacement, what is the probability that both are dead?',
          p: [] },

    80: { q: 'A red die and a white die are thrown once. Let A be the event of getting a 4 on the red die, B the event that the two faces add up to an odd number, C the event of getting a 5 on the red die, and D the event that the two faces add up to 11.',
          p: ['Are A and B independent events?',
              'Are C and D independent events?'] },

    81: { q: 'A family has two children. Assume a boy and a girl are equally likely. Let A be the event that the family has at most one girl, and B the event that the two children are of the same sex.',
          p: ['Are A and B independent events?',
              'What if the family has three children?'] },

    82: { q: 'A fair coin is tossed twice. Define the following events:',
          p: ['A: the first toss shows H',
              'B: the second toss shows H',
              'C: the two tosses show the same result',
              'Are A, B and C independent?'] },

    83: { q: 'Bag 1 holds 5 red balls and 3 blue balls; bag 2 holds 3 red balls and 1 blue ball; bag 3 holds 4 red balls and 2 blue balls. A bag is chosen at random and one ball is drawn from it. Find the probability that the ball is red.',
          p: [] },

    84: { q: 'A shop receives two boxes, each holding 6 phones. Box 1 contains 1 faulty phone and box 2 contains 2 faulty phones. After both boxes are opened, one phone is chosen at random and found to be faulty. Find the probability that it came from box 2.',
          p: [] },

    85: { q: 'A shop buys goods from 3 different factories. Factory A’s box holds 12 blue caps, 6 red caps and 6 green caps. Factory B’s box holds 10 blue caps, 10 red caps and 4 green caps. Factory C’s box holds 8 blue caps, 8 red caps and 8 green caps. A box is chosen and then one cap is drawn from it at random.',
          p: ['If the cap is red, find the probability that it came from factory A’s box.',
              'If the cap is green, find the probability that it came from factory B’s box.'] },

    86: { q: 'A company runs a staff training scheme. Taking time, conditions and location into account, the company sends 20% of its staff to site A, 35% to site B and 45% to site C. The pass rate is 80% at site A, 75% at site B and 60% at site C.',
          p: ['If a member of staff passed, find the probability that they went to site B.',
              'If a member of staff failed, find the probability that they went to site C.'] },

    /* --- 87–108, the practice set of មេរៀនទី៨ ប្រូបាប (pp. 252–265).
           101–108 are past national examination questions, 2014–2021. --- */

    87: { q: 'Two distinguishable dice are thrown. Find the probability that one die shows 1, given that the two dice show different numbers.',
          p: [] },

    88: { q: 'A bag holds 5 red balls and 1 black ball. Three balls are drawn one at a time at random, without replacement. Let A be “the first ball is red”, B “the second ball is red” and C “the third ball is black”.',
          p: ['Compute the conditional probabilities P(A/B), P(C/A∩B) and P(A/C).',
              'Are the events A and C dependent or independent?',
              'Are the events A and B dependent or independent?'] },

    89: { q: 'A bag holds 100 coins, of which 25 are fair and 75 are badly balanced. For each badly balanced coin the probability of landing tails-up is 3/5. One coin is drawn from the bag at random and tossed. Let A be “a fair coin was drawn”, B “a badly balanced coin was drawn” and C “the toss landed tails-up”.',
          p: ['Compute the probability of A and of B.',
              'Compute the probability of C.',
              'Find the probability that the coin drawn was fair, given that the toss landed tails-up.'] },

    90: { q: 'A teacher writes algebra questions and geometry questions on slips for students to draw and answer, so that drawing an algebra question is as likely as drawing a geometry one. The teacher knows that the probability a particular student answers an algebra question correctly is 0.7, and 0.5 for a geometry question.',
          p: ['Find the probability that the student answers correctly.',
              'Given that the student answered correctly, what is the probability that the question was a geometry one?'] },

    91: { q: 'A bag holds 6 balls: 3 marked 1, 2 marked 2 and 1 marked 3. Two balls are drawn together at random.',
          p: ['Write down the sample space S and the probability of each outcome in it.',
              'Find the probability that the two balls carry different numbers; that exactly one ball is marked 1; that at least one ball is marked 1.',
              'Find the probability that the two numbers add up to 4.'] },

    92: { q: 'A and B are events in a sample space S with P(A) = 0.3, P(B) = 0.5 and P(A∩B) = 0.2.',
          p: ['Compute P(Ā), P(B̄) and P(A∪B), where Ā and B̄ are the complements of A and B.',
              'Show that A = (A∩B) ∪ (A∩B̄), then find P(A∩B̄) and P(A∪B̄).',
              'Compute P(Ā∩B) and P(Ā∪B).'] },

    93: { q: 'A raffle of 150 tickets is prepared, to be sold out before the draw; 7 of them win a prize.',
          p: ['If a buyer takes one ticket, what is the probability of winning?',
              'Suppose a third of the 150 tickets are winners. If someone buys all 150 tickets, can they be certain of winning that third? Find the probability of holding at least 3 winning tickets.'] },

    94: { q: 'In an examination the teacher sets 100 questions. Each student draws 3 of them at random to answer. Student A has prepared answers to a quarter of all the questions. Find the probability that student A draws, among the prepared questions:',
          p: ['3 questions', '2 questions', 'none at all', 'at least 1 question.'] },

    95: { q: 'Eight cards are dealt from a 52-card pack. Find the probability that the hand contains:',
          p: ['exactly 2 clubs', '2 diamonds and 1 ace', '3 diamonds and 2 spades.'] },

    96: { q: 'A teacher surveys 30 students about sport: 20 like reading sports magazines, 14 like playing sport, and 8 like both. Six students are questioned at random. Find the probability of the events:',
          p: ['A: “all 6 like playing sport or reading sports magazines”',
              'B: “no student likes playing sport”',
              'C: “exactly one student likes playing sport”.'] },

    97: { q: 'One card is drawn from a 52-card pack. Let C be “the card is a heart”, R “the card is a spade” and F “the card is a queen or a jack”.',
          p: ['Are the events C and R independent?', 'Compute P(C/F).', 'Are the events C and F independent?'] },

    98: { q: 'In one village 15% of people have illness Ma. Among those with Ma, 15% also have illness Mb; among those without Ma, 4% have Mb. A person is chosen at random. Let A be “has Ma” and B “has Mb”.',
          p: ['Compute P(A), P(B/A) and P(B/Ā).', 'Compute P(B) and P(A/B).'] },

    99: { q: 'A factory makes light bulbs, 75% of them up to standard and 25% below standard. The bulbs are then sorted into boxes. Because the check is not thorough, 10% of the below-standard bulbs and 90% of the standard bulbs end up in the boxes. Find the probability that:',
          p: ['a bulb is accepted into a box',
              'a bulb is up to standard, given that it was accepted into a box',
              'if 100 bulbs are made, how many go into the boxes, and how many of those are up to standard?'] },

    100: { q: 'There are two boxes: box 1 holds 2 white and 3 black marbles, box 2 holds 3 white and 4 black. A box is chosen at random, then one marble is drawn at random from it.',
           p: ['Find the probability that the marble is white.',
               'Find the probability that the marble came from box 1, given that it is black.'] },

    101: { q: 'An urn holds 12 balls numbered 1 to 12. Three are drawn from the urn together at random. (National examination 2014, first session)',
           p: ['Find the probability that all three numbers are divisible by 3.',
               'Find the probability that exactly one number is divisible by 3.',
               'Find the probability that the numbers, taken in increasing order, form an arithmetic progression of common difference d = 3.'] },

    102: { q: 'A class has 4 Asian students, 2 African students and 3 European students. They are put into self-study groups of 3 at random. Find the probability of the events below. (National examination 2014, second session)',
           p: ['“at least 2 of them are Asian”', '“at least 2 of them are European”', '“one student from each continent”.'] },

    103: { q: 'A bag holds 3 white balls, 3 yellow balls and 2 red balls. Three are drawn together at random. Every ball is equally likely to be drawn. Compute the probability of the events below. (National examination 2015)',
           p: ['A: “at least two of them are yellow”', 'B: “the three are all of different colours”.'] },

    104: { q: 'A bag holds 15 balls: 7 green ones numbered 1 to 7, 5 yellow ones numbered 1 to 5, and 3 red ones numbered 1 to 3. One ball is drawn at random. Find the probability of the events below. (National examination 2016)',
           p: ['A: “the ball drawn is green”', 'B: “the ball drawn carries an odd number”',
               'C: “the ball drawn is green and carries an odd number”.'] },

    105: { q: 'A class of 10 students has 4 girls and 6 boys. A group of 4 is formed at random to compete against another class. Find the probability of the events below. (National examination 2017)',
           p: ['A: “the group chosen is all girls”', 'B: “the group chosen is all boys”',
               'C: “the group chosen is 50 per cent boys”.'] },

    106: { q: 'A bag holds 2 white balls, 4 red balls and 4 yellow balls. Three are drawn together at random. Find the probability of the events. (National examination 2018)',
           p: ['A: “all three are red”', 'B: “at least two are yellow”', 'C: “the three are all of different colours”.'] },

    107: { q: 'A bag holds 16 balls numbered 1 to 16. Three are drawn at random. Find the probability of the events. (National examination 2019)',
           p: ['A: “all three numbers are divisible by 4”',
               'B: “none of the three numbers is divisible by 5”',
               'C: “exactly one number is divisible by 4”.'] },

    108: { q: 'A bag holds 2 red balls, 3 yellow balls and 4 white balls. Three are drawn from the bag at random. Compute the probability of the events below. (National examination 2021)',
           p: ['A: “all 3 are white”', 'B: “the 3 are all of different colours”.'] }
  };
})(window);
