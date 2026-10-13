const CATEGORIES = ["savings", "emergency", "wants", "needs", "debt", "income"];

const SCENARIOS = [

  {
    id: "income-first-paycheck",
    category: "income",
    title: "First Paycheck",
    text: "You just got your very first paycheck from two weeks at the corner cafe: $200. Your friends want to hit the mall this weekend. What's the move?",
    choices: [
      {
        label: "Deposit it into savings",
        balance: 200,
        effect: { savings: 1.4 },
        smart: true,
      },
      {
        label: "Celebrate with a mall haul",
        balance: 0,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Save half, spoil yourself half",
        balance: 70,
        effect: { savings: 1.3, wants: 1.2 },
        smart: true,
      }
    ]
  },
  {
    id: "income-birthday-cash",
    category: "income",
    title: "Birthday Cash",
    text: "Grandma sent $150 for your birthday with a note saying 'do something smart.' Your older brother says game skins are an investment.",
    choices: [
      {
        label: "Put it straight into savings",
        balance: 150,
        effect: { savings: 1.4 },
        smart: true,
      },
      {
        label: "Buy the skins, they're pretty",
        balance: 0,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Spend JUST $50 on the skins",
        balance: 100,
        effect: { emergency: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "income-closet-cleanup",
    category: "income",
    title: "Closet Cleanup",
    text: "Mum suggests selling your old clothes and games online. That stack might be worth $150. Is it worth the effort?",
    choices: [
      {
        label: "List everything tonight",
        balance: 150,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Too much work, skip it",
        balance: 0,
        effect: { wants: 1.3 },
        smart: false,
      },
      {
        label: "Give them away to op shop",
        balance: 0,
        effect: { needs: 1.3 },
        smart: true,
      }
    ]
  },
  {
    id: "income-tutoring",
    category: "income",
    title: "Tutoring Offer",
    text: "A classmate will pay you $12/hour to tutor them in maths: 4 hours this month. Your schedule is already packed. Take it?",
    choices: [
      {
        label: "Yes, rearrange an afternoon",
        balance: 48,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Negotiate for $15/h",
        balance: 50,
        effect: { wants: 1.3 },
        smart: true,
      },
      {
        label: "Say no to the deal",
        balance: 0,
        effect: { savings: 1.2 },
        smart: false,
      }
    ]
  },
  {
    id: "income-extra-shift",
    category: "income",
    title: "Extra Shift",
    text: "Your manager needs coverage this weekend for $50. Problem: you have a group hangout planned the same day.",
    choices: [
      {
        label: "Take it, move the hangout",
        balance: 50,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Skip it, enjoy the hangout",
        balance: 0,
        effect: { wants: 1.3 },
        smart: false,
      },
      {
        label: "Take it, skip next week",
        balance: 50,
        effect: { income: 1.2, wants: 1.2 },
        smart: true,
      }
    ]
  },
  {
    id: "income-found-money",
    category: "income",
    title: "Found Money",
    text: "You spot a $20 note on the floor by the lockers. No one's around to claim it. What do you do?",
    choices: [
      {
        label: "Turn it into the office",
        balance: 0,
        effect: { needs: 1.3 },
        smart: true,
      },
      {
        label: "Pocket it. Finders keepers.",
        balance: 20,
        effect: { wants: 1.4 },
        smart: true,
      },
      {
        label: "Feed a broke friend",
        balance: -20,
        effect: { needs: 1.2, savings: 1.2 },
        smart: true,
      }
    ]
  },
  {
    id: "income-mow-lawn",
    category: "income",
    title: "Neighbour's Yard",
    text: "Your neighbour offers $25 to mow their lawn. It's hot out. The cash is real and the job takes about an hour.",
    choices: [
      {
        label: "Do it for the cash",
        balance: 25,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Haggle for $35",
        balance: 35,
        effect: { wants: 1.3 },
        smart: true,
      },
      {
        label: "Send a sibling instead",
        balance: 0,
        effect: { income: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "income-side-hustle",
    category: "income",
    title: "Side Hustle",
    text: "Someone online will pay $40 for a video edit you can finish in a weekend. No upfront cost. Go for it?",
    choices: [
      {
        label: "Do the edit, deliver it",
        balance: 40,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Too much work, pass",
        balance: 0,
        effect: { wants: 1.3 },
        smart: false,
      },
      {
        label: "Demand $60 or nothing",
        balance: 0,
        effect: { wants: 1.2 },
        smart: false,
      }
    ]
  },
  {
    id: "income-pocket-money-deal",
    category: "income",
    title: "Pocket Money Deal",
    text: "Your parents will bump your pocket money from $20 to $25 a week if you do the dishes without being asked. Take the deal?",
    choices: [
      {
        label: "Deal, easy money",
        balance: 25,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Negotiate for $30",
        balance: 20,
        effect: { wants: 1.3 },
        smart: false,
      },
      {
        label: "Pass. Dishes are gross.",
        balance: 0,
        effect: { savings: 1.2 },
        smart: false,
      }
    ]
  },
  {
    id: "needs-school-supplies",
    category: "needs",
    title: "Supply Run",
    text: "New school term: three teachers demand notebooks, binders, and folders. The fancy matching set is $28; the basic set is $12.",
    choices: [
      {
        label: "Basic set, function over flash",
        balance: -12,
        effect: { needs: 1.3 },
        smart: true,
      },
      {
        label: "The matching colour set",
        balance: -28,
        effect: { wants: 1.4, needs: 1.1 },
        smart: false,
      },
      {
        label: "Borrow from the group chat",
        balance: 0,
        effect: { debt: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "needs-lunch",
    category: "needs",
    title: "Lunch Decisions",
    text: "School lunch is $5. Today's menu is a mystery. Or you could pack leftovers from home in two minutes.",
    choices: [
      {
        label: "Pack the leftovers",
        balance: 5,
        effect: { savings: 1.3 },
        smart: true,
      },
      {
        label: "Buy lunch, curiosity wins",
        balance: -5,
        effect: { income: 1.2 },
        smart: false,
      },
      {
        label: "Skip lunch, vending chips",
        balance: -2,
        effect: { needs: 1.2 },
        smart: false,
      }
    ]
  },
  {
    id: "needs-bike-chain",
    category: "needs",
    title: "Broken Ride",
    text: "Your bike chain snapped and your bike is your main way to school. Fix it for $40 or ride the bus for $25 a week",
    choices: [
      {
        label: "Fix the chain now",
        balance: -40,
        effect: { needs: 1.4 },
        smart: true,
      },
      {
        label: "Bus pass for the rest of the week",
        balance: -25,
        effect: { needs: 1.3, savings: 1.1 },
        smart: true,
      },
      {
        label: "Ask for a new bike",
        balance: -150,
        effect: { wants: 1.4 },
        smart: false,
      }
    ]
  },
  {
    id: "needs-gym-shoes",
    category: "needs",
    title: "PE Shoes",
    text: "Your PE teacher calls out your worn-out shoes in front of everyone. Replacement: $25 basic or $90 brand-name.",
    choices: [
      {
        label: "Basic pair, done",
        balance: -25,
        effect: { needs: 1.3 },
        smart: true,
      },
      {
        label: "Fancy brand-name pair",
        balance: -90,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Tape them up for now",
        balance: 0,
        effect: { emergency: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "needs-calculator",
    category: "needs",
    title: "Calculator Crisis",
    text: "Your calculator dies right before the maths exams. A new battery is $5, or a new calculator is $100 ",
    choices: [
      {
        label: "New battery, as long as it works",
        balance: -5,
        effect: { needs: 1.3 },
        smart: true,
      },
      {
        label: "Borrow from the library daily",
        balance: 0,
        effect: { income: 1.1 },
        smart: true,
      },
      {
        label: "Brand new, flashy model one",
        balance: -100,
        effect: { wants: 1.4 },
        smart: false,
      }
    ]
  },
  {
    id: "needs-winter-coat",
    category: "needs",
    title: "Winter's Coming",
    text: "Your winter coat's zipper just broke and a we're about to hit peak winter. Repair: $20. New warm coat: $70. Layers: free.",
    choices: [
      {
        label: "Repair the zipper",
        balance: -20,
        effect: { needs: 1.3 },
        smart: true,
      },
      {
        label: "Buy the warm new coat",
        balance: -70,
        effect: { needs: 1.3 },
        smart: true,
      },
      {
        label: "Layer up and stay warm",
        balance: 0,
        effect: { emergency: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "needs-class-trip",
    category: "needs",
    title: "Class Trip",
    text: "History class is offering an overnight trip to the capital. Total: $100, with a $25 deposit due Friday.",
    choices: [
      {
        label: "Pay the deposit, commit",
        balance: -25,
        effect: { needs: 1.4 },
        smart: true,
      },
      {
        label: "Skip trip, skip school! Relax instead",
        balance: 0,
        effect: { savings: 1.4 },
        smart: true,
      },
      {
        label: "Ask parents to cover it",
        balance: 0,
        effect: { wants: 1.3 },
        smart: true,
      }
    ]
  },
  {
    id: "needs-bus-pass",
    category: "needs",
    title: "Bus or Walk",
    text: "The bus is $2.5 one trip, that's $5 a day... $25 a week... and $100 a month! Or you can walk 40 minutes each way.",
    choices: [
      {
        label: "Go bus, too much excercise",
        balance: -100,
        effect: { needs: 1.3, savings: 1.1 },
        smart: false,
      },
      {
        label: "Only bus in bad weather or late",
        balance: -10,
        effect: { savings: 1.4 },
        smart: true,
      },
      {
        label: "Walk and hitch rides with friends",
        balance: 0,
        effect: { debt: 1.4 },
        smart: true,
      }
    ]
  },
  {
    id: "needs-laptop",
    category: "needs",
    title: "Dying Laptop",
    text: "Your laptop takes six minutes to boot and crashes mid-presentation. A friend will sell you their used one for $100. A new one is $500.",
    choices: [
      {
        label: "Buy the used one",
        balance: -100,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Keep rebooting, deal with it",
        balance: 0,
        effect: { wants: 1.2 },
        smart: false,
      },
      {
        label: "Brand-new top spec instead",
        balance: -500,
        effect: { wants: 1.4 },
        smart: false,
      }
    ]
  },
  {
    id: "wants-video-game-drop",
    category: "wants",
    title: "Game Release Day",
    text: "Your favourite game just dropped at $70. It's release night, but there's a huge physics test on Thursday.",
    choices: [
      {
        label: "Buy it, play later",
        balance: -70,
        effect: { wants: 1.3, needs: 1.1 },
        smart: true,
      },
      {
        label: "Buy it, play it, study later",
        balance: -70,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Wait for a sale price",
        balance: 0,
        effect: { savings: 1.4 },
        smart: true,
      }
    ]
  },
  {
    id: "wants-sneaker-drop",
    category: "wants",
    title: "The Sneaker Wave",
    text: "Everyone's getting these trendy sneakers, they're overpriced at $130. Yours work fine, they're just not trendy. The FOMO is loud today.",
    choices: [
      {
        label: "Scroll past. Your shoes work",
        balance: 0,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Get them, can't miss this one out",
        balance: -130,
        effect: { wants: 1.4, needs: 1.3 },
        smart: false,
      },
      {
        label: "Wait a month, then decide",
        balance: 0,
        effect: { savings: 1.3, wants: 1.1 },
        smart: true,
      }
    ]
  },
  {
    id: "wants-concert",
    category: "wants",
    title: "Concert Tickets",
    text: "Your favourite band announced a show. Tickets are $80 and will sell out fast. You've been saving for something else.",
    choices: [
      {
        label: "Go. Memories over money.",
        balance: -80,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Skip it. Maybe next time",
        balance: 0,
        effect: { savings: 1.4 },
        smart: true,
      },
      {
        label: "Watch it live online instead",
        balance: 0,
        effect: { wants: 1.2 },
        smart: false,
      }
    ]
  },
  {
    id: "wants-microtransactions",
    category: "wants",
    title: "In-Game Purchases",
    text: "That game you play just dropped a battle pass plus loot boxes. $20 for the pass, and all the small purchases add up fast.",
    choices: [
      {
        label: "Set a $5 monthly limit",
        balance: -5,
        effect: { wants: 1.3, savings: 1.2 },
        smart: true,
      },
      {
        label: "Get pass and a lil more",
        balance: -45,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Free-to-play grind instead",
        balance: 0,
        effect: { savings: 1.3 },
        smart: true,
      }
    ]
  },
  {
    id: "wants-boba-run",
    category: "wants",
    title: "After-School Run",
    text: "Friends grab boba and fries after school every day. It's only $8 a day. Only $8... right?",
    choices: [
      {
        label: "Join every day this week",
        balance: -40,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Make it a weekly treat",
        balance: -8,
        effect: { wants: 1.2, savings: 1.2 },
        smart: true,
      },
      {
        label: "Skip and go home",
        balance: 0,
        effect: { income: 1.4 },
        smart: true,
      }
    ]
  },
  {
    id: "wants-new-phone",
    category: "wants",
    title: "Shiny New Phone",
    text: "Your phone works fine, but the new one's cameras are better and the upgrade is $300. 'Everyone' has one.",
    choices: [
      {
        label: "Keep the working phone",
        balance: 0,
        effect: { savings: 1.4 },
        smart: true,
      },
      {
        label: "Upgrade to the latest model",
        balance: -300,
        effect: { debt: 1.4, wants: 1.2 },
        smart: false,
      },
      {
        label: "Wait until yours actually breaks",
        balance: 0,
        effect: { income: 1.2 },
        smart: true,
      }
    ]
  },
  {
    id: "wants-dollar-store",
    category: "wants",
    title: "$2 Shop Haul",
    text: "The $2 Shop has a huge sale. You go in for one item and the aisles are calling: snacks to random gadgets.",
    choices: [
      {
        label: "Set a $10 budget",
        balance: -10,
        effect: { wants: 1.2, savings: 1.3 },
        smart: false,
      },
      {
        label: "Full cart. All in!",
        balance: -30,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Just buy the one item",
        balance: -2,
        effect: { needs: 1.3 },
        smart: true,
      }
    ]
  },
  {
    id: "wants-subscriptions",
    category: "wants",
    title: "Subscription Stack",
    text: "You want Netflix, Spotify, and a gaming subscription: $30 a month stacked. Your friends all share accounts.",
    choices: [
      {
        label: "Keep one, share the rest",
        balance: -10,
        effect: { savings: 1.3 },
        smart: true,
      },
      {
        label: "Stack all three. Treat yourself.",
        balance: -30,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Cancel all, join the sharing squad",
        balance: 10,
        effect: { income: 1.4 },
        smart: true,
      }
    ]
  },
  {
    id: "wants-mall-popup",
    category: "wants",
    title: "The Pop-Up Set",
    text: "A mall pop-up is selling limited-edition keychains, pins, and posters for your favourite anime. The full set is $35.",
    choices: [
      {
        label: "Pick your top two items",
        balance: -14,
        effect: { wants: 1.2, savings: 1.2 },
        smart: true,
      },
      {
        label: "Full set. It's 'collector's value.'",
        balance: -35,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Take photos, you don't NEED them",
        balance: 0,
        effect: { savings: 1.4 },
        smart: true,
      }
    ]
  },
  {
    id: "savings-save-account",
    category: "savings",
    title: "Auto-Savings",
    text: "Opening a savings account takes ten minutes, and you can auto-transfer $50 every paycheck. Worth setting up?",
    choices: [
      {
        label: "Set up the auto-transfer",
        balance: 55,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Too confusing, skip it",
        balance: 0,
        effect: { wants: 1.3 },
        smart: false,
      },
      {
        label: "Open it but never transfer",
        balance: 0,
        effect: { savings: 1.1 },
        smart: false,
      }
    ]
  },
  {
    id: "savings-two-goals",
    category: "savings",
    title: "Two Urgent Goals",
    text: "You really want wireless earbuds ($60) and a spring trip with friends ($100). Both feel urgent. How do you budget?",
    choices: [
      {
        label: "Reconsider, don't spend yet",
        balance: 0,
        effect: { income: 1.4},
        smart: true,
      },
      {
        label: "Split savings between both",
        balance: -160,
        effect: { savings: 1.3 },
        smart: false,
      },
      {
        label: "Impulse-buy the earbuds now",
        balance: -60,
        effect: { wants: 1.4 },
        smart: false,
      }
    ]
  },
  {
    id: "savings-round-up",
    category: "savings",
    title: "Round Up",
    text: "Your banking app can round up every purchase to the nearest dollar and sweep the change into savings. It's a good savings trick.",
    choices: [
      {
        label: "Turn on the round-ups",
        balance: 10,
        effect: { savings: 1.4 },
        smart: true,
      },
      {
        label: "It's basically nothing, skip it",
        balance: 0,
        effect: { wants: 1.3 },
        smart: false,
      },
      {
        label: "Round up plus some extra",
        balance: 20,
        effect: { savings: 1.4 },
        smart: true,
      }
    ]
  },
  {
    id: "savings-50-30-20",
    category: "savings",
    title: "The 50/30/20 Rule",
    text: "A finance video says split money: 50% needs, 30% wants, 20% savings. Your paycheck is $180, so that's $36 to savings.",
    choices: [
      {
        label: "Automate the 20%",
        balance: 40,
        effect: { savings: 1.4 },
        smart: true,
      },
      {
        label: "Spend it all, no rules",
        balance: 0,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Save 50% instead, start big",
        balance: 100,
        effect: { savings: 1.3 },
        smart: true,
      }
    ]
  },
  {
    id: "savings-what-if-fund",
    category: "savings",
    title: "The 'What If' Fund",
    text: "Your phone, your bike, and your bus pass could all break this month. A small 'what if' fund would soften the blows.",
    choices: [
      {
        label: "Start the small stash",
        balance: 20,
        effect: { income: 1.4, savings: 1.2 },
        smart: true,
      },
      {
        label: "It won't happen to you",
        balance: 0,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Start it next month, promise",
        balance: 0,
        effect: { needs: 1.2 },
        smart: false,
      }
    ]
  },
  {
    id: "savings-coupon-hunt",
    category: "savings",
    title: "Coupon Hunt",
    text: "There's a 20% off code online for the store you need supplies from. It takes five minutes to find and the current price is $50. Worth it?",
    choices: [
      {
        label: "Find and use it",
        balance: -40,
        effect: { savings: 1.3 },
        smart: true,
      },
      {
        label: "Full price, can't be bothered",
        balance: -50,
        effect: { wants: 1.2 },
        smart: false,
      },
      {
        label: "Wait for a bigger sale",
        balance: -25,
        effect: { savings: 1.4 },
        smart: true,
      }
    ]
  },
  {
    id: "savings-the-pay-rise",
    category: "savings",
    title: "Your Pay Rise",
    text: "You got a pay rise: $20/hr to $22/hr. That's about $24 more a week. What do you do with the extra?",
    choices: [
      {
        label: "Redirect it straight into savings",
        balance: 26,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Spend it on nicer wants",
        balance: 0,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Save half, spend half",
        balance: 12,
        effect: { savings: 1.3, wants: 1.1 },
        smart: true,
      }
    ]
  },
  {
    id: "savings-future-fund",
    category: "savings",
    title: "Future Fund",
    text: "You peek at the account your family has been adding to for your future. It's a start, but a long way to go. Add some of your own?",
    choices: [
      {
        label: "Add $20 of your own",
        balance: 22,
        effect: { savings: 1.4, income: 1.1 },
        smart: true,
      },
      {
        label: "Let them handle it",
        balance: 0,
        effect: { wants: 1.3 },
        smart: false,
      },
      {
        label: "Add $50. Go big.",
        balance: 55,
        effect: { savings: 1.4, income: 1.3 },
        smart: true,
      }
    ]
  },
  {
    id: "savings-pay-yourself-first",
    category: "savings",
    title: "Pay Yourself First",
    text: "You've heard that you should set savings aside the moment you're paid, before doing anything.",
    choices: [
      {
        label: "Spend them all, treat yourself",
        balance: 0,
        effect: { savings: 1.4 },
        smart: false,
      },
      {
        label: "Spend first, save leftovers",
        balance: 0,
        effect: { wants: 1.4 },
        smart: false,
      },
      {
        label: "Deposit into savings first",
        balance: 50,
        effect: { savings: 1.4, wants: 1.1 },
        smart: true,
      }
    ]
  },
  {
    id: "emergency-cracked-screen",
    category: "emergency",
    title: "Cracked Screen",
    text: "You fumble your phone in the hall. The screen spider-cracks. Repair: $80. New phone: $250. Or just deal with it?",
    choices: [
      {
        label: "Repair it",
        balance: -80,
        effect: { income: 1.3, needs: 1.2 },
        smart: true,
      },
      {
        label: "Live with the crack",
        balance: 0,
        effect: { emergency: 1.4 },
        smart: false,
      },
      {
        label: "Buy a new phone",
        balance: -250,
        effect: { wants: 1.4, debt: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "emergency-toothache",
    category: "emergency",
    title: "Sudden Toothache",
    text: "A toothache hits during third period. The emergency dentist visit costs $50. You could tough it out... but risks grow.",
    choices: [
      {
        label: "See the dentist now",
        balance: -50,
        effect: { income: 1.3 },
        smart: true,
      },
      {
        label: "Tough it out",
        balance: 0,
        effect: { emergency: 1.4 },
        smart: false,
      },
      {
        label: "Wait a week and see",
        balance: 0,
        effect: { wants: 1.2 },
        smart: true,
      }
    ]
  },
  {
    id: "emergency-lost-wallet",
    category: "emergency",
    title: "Lost Wallet",
    text: "You lost your wallet with some cash and your debit card. Void your card and order a new one, or lock your card and retrace your steps first?",
    choices: [
      {
        label: "Lock it and retrace first",
        balance: 0,
        effect: { savings: 1.2 },
        smart: true,
      },
      {
        label: "Void and wait for new card",
        balance: -15,
        effect: { needs: 1.3 },
        smart: true,
      },
      {
        label: "New wallet, new card",
        balance: -30,
        effect: { wants: 1.4 },
        smart: false,
      }
    ]
  },
  {
    id: "emergency-locker-lock",
    category: "emergency",
    title: "Locker Lockout",
    text: "Your locker lock jams during exams week. A new lock is $10, or you trust friends to carry your stuff all week.",
    choices: [
      {
        label: "Buy the $10 lock",
        balance: -10,
        effect: { needs: 1.2, income: 1.2 },
        smart: true,
      },
      {
        label: "Rely on your friends",
        balance: 0,
        effect: { wants: 1.3 },
        smart: false,
      },
      {
        label: "Use locker without lock",
        balance: 0,
        effect: { needs: 1.2 },
        smart: false,
      }
    ]
  },
  {
    id: "emergency-friend-borrow",
    category: "emergency",
    title: "Friend in a Pinch",
    text: "A close friend forgot both their lunch and bus card. They promise to pay you back and a bit more on Friday. Cover for them?",
    choices: [
      {
        label: "Lend it. They're reliable",
        balance: 5,
        effect: { needs: 1.2 },
        smart: true,
      },
      {
        label: "Say no, can't afford it",
        balance: 0,
        effect: { savings: 1.3 },
        smart: false,
      },
      {
        label: "Say it's your treat",
        balance: -8,
        effect: { income: 1.3 },
        smart: true,
      }
    ]
  },
  {
    id: "emergency-allergy-meds",
    category: "emergency",
    title: "Allergy Season",
    text: "Your allergies went from 'annoying' to 'can't stop sneezing in class.' Basic antihistamines are $8; the premium are $22.",
    choices: [
      {
        label: "Grab the basic ones, done",
        balance: -8,
        effect: { needs: 1.2 },
        smart: true,
      },
      {
        label: "Premium brand, always",
        balance: -22,
        effect: { wants: 1.3, needs: 1.1 },
        smart: false,
      },
      {
        label: "Nothing. Just suffer.",
        balance: 0,
        effect: { emergency: 1.4 },
        smart: false,
      }
    ]
  },
  {
    id: "emergency-flat-tyre",
    category: "emergency",
    title: "Flat Tyre",
    text: "Flat tyre on the way to your weekend shift. Patch kit: $6. Hitch a ride with a co-worker, or skipping the shift costs you $30.",
    choices: [
      {
        label: "Patch it yourself",
        balance: -6,
        effect: { needs: 1.3, income: 1.2 },
        smart: true,
      },
      {
        label: "Hitch a ride, it's chill",
        balance: 0,
        effect: { wants: 1.3, income: 1.2 },
        smart: false,
      },
      {
        label: "Skip work, not worth it",
        balance: -30,
        effect: { emergency: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "debt-friend-loan",
    category: "debt",
    title: "The $100 Borrow",
    text: "A friend's phone is gone. They ask to borrow $100 for a replacement until 'next month.' They already owe others money.",
    choices: [
      {
        label: "Say no, gently",
        balance: 0,
        effect: { savings: 1.3 },
        smart: true,
      },
      {
        label: "Lend it, you feel bad",
        balance: -100,
        effect: { debt: 1.3, wants: 1.1 },
        smart: false,
      },
      {
        label: "Lend half, better than nothing",
        balance: -50,
        effect: { debt: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "debt-buy-now-pay-later",
    category: "debt",
    title: "Buy Now, Pay Later",
    text: "Those shoes you wanted offer '4 payments of $30.' So basically nothing, right?",
    choices: [
      {
        label: "Read the fine print first",
        balance: -120,
        effect: { income: 1.3 },
        smart: true,
      },
      {
        label: "Four payments is basically free",
        balance: -150,
        effect: { debt: 1.4, wants: 1.3 },
        smart: false,
      },
      {
        label: "Save up and rethink",
        balance: 0,
        effect: { debt: 1.3 },
        smart: true,
      }
    ]
  },
  {
    id: "debt-credit-temptation",
    category: "debt",
    title: "Credit Card Temptation",
    text: "Your older sibling offers their credit card 'just for this one thing.' Minimum payments feel tiny until the fees add up.",
    choices: [
      {
        label: "Decline, respectfully",
        balance: 0,
        effect: { savings: 1.4 },
        smart: true,
      },
      {
        label: "Use the card just once",
        balance: -25,
        effect: { debt: 1.4 },
        smart: false,
      },
      {
        label: "Use it, pay back quickly",
        balance: -20,
        effect: { debt: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "debt-lunch-reminder",
    category: "debt",
    title: "The Lunch IOU",
    text: "You borrowed $15 from a friend for lunch two weeks ago and forgot. A reminder slip just appeared on your locker.",
    choices: [
      {
        label: "Pay them back today",
        balance: -15,
        effect: { savings: 1.2, needs: 1.2 },
        smart: true,
      },
      {
        label: "'Tomorrow for sure' — again",
        balance: 0,
        effect: { debt: 1.3 },
        smart: false,
      },
      {
        label: "Do their homework instead",
        balance: 0,
        effect: { debt: 1.2 },
        smart: true,
      }
    ]
  },
  {
    id: "debt-fast-money-app",
    category: "debt",
    title: "Fast Money App",
    text: "An app offers $50 instantly, repaid in a week with only a 'small fee.' The small fee is actually 20% per week. Tempting?",
    choices: [
      {
        label: "Close the app, walk away",
        balance: 0,
        effect: { savings: 1.3, income: 1.1 },
        smart: true,
      },
      {
        label: "Take the cash now",
        balance: 50,
        effect: { debt: 1.4, emergency: 1.3 },
        smart: false,
      },
      {
        label: "take it to the cassino",
        balance: -10,
        effect: { debt: 1.4, wants: 1.2 },
        smart: false,
      }
    ]
  },
  {
    id: "debt-phone-plan",
    category: "debt",
    title: "The Fancy Phone Plan",
    text: "The phone store wants to finance a $400 phone over two years, with 'free' add-ons that quietly raise the monthly bill. Your phone works.",
    choices: [
      {
        label: "Keep your current phone",
        balance: 0,
        effect: { income: 1.4 },
        smart: true,
      },
      {
        label: "Finance the new phone",
        balance: -500,
        effect: { debt: 1.4, wants: 1.2 },
        smart: false,
      },
      {
        label: "Put it on your wishlist",
        balance: 0,
        effect: { debt: 1.3 },
        smart: false,
      }
    ]
  },
  {
    id: "debt-iou-balance",
    category: "debt",
    title: "The IOU Balance",
    text: "You owe your sister $20 from two weeks ago and $5 to the group chat for snacks. You know. Do they?",
    choices: [
      {
        label: "Clear every debt this week",
        balance: -25,
        effect: { savings: 1.3, income: 1.1 },
        smart: true,
      },
      {
        label: "Wait until someone reminds you",
        balance: 0,
        effect: { debt: 1.3 },
        smart: false,
      },
      {
        label: "Declare 'debt forgiveness day'",
        balance: 0,
        effect: { wants: 1.2 },
        smart: false,
      }
    ]
  }
];

const MAX_ROUNDS = 30;
const START_BALANCE = 1000;
const BANKRUPT_THRESHOLD = 0;

const state = {
  balance: START_BALANCE,
  round: 0,
  seen: new Set(),
  categoryWeight: {},
  locked: false,
  totalChoices: 0
}

for (const cat of CATEGORIES) {
  state.categoryWeight[cat] = 1;
}
/* cat is in place for all catagories' name */

const fmt = (n) =>
   n.toLocaleString("en-NZ", { style: "currency", currency: "NZD", maximumFractionDigits: 0 });

function resolveBalance(b) {
   if (typeof b === "number") return b;
}

function applyEffects(effects) {
  if (!effects) return;
  for (const key in effects) {
    const mult = effects[key];
    if (mult < 1) state.categoryWeight[key] = Math.max(0.2, state.categoryWeight[key] * mult);
    else state.categoryWeight[key] = Math.min(3, state.categoryWeight[key] * mult);
  }
}

function weightedPick() {
  let pool = SCENARIOS.filter((s) => !state.seen.has(s.id));
  if (pool.length === 0) {
    state.seen.clear();
    pool = [...SCENARIOS];
  }
    const weights = pool.map((s) => {
    const w = s.baseWeight || 1;
    return Math.max(0.1, w * (state.categoryWeight[s.category] || 1));
  });
  const total = weights.reduce((a, b) => a + b, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < pool.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}

function showScenario(scenario) {
  els.title.textContent = scenario.title;
  els.text.textContent = scenario.text;
  
  const card = $("textbox");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "";
  els.choiceBtns.forEach((buttons, i) => {
    const choice = scenario.choices[i];
    if (choice) {
      buttons.textContent = choice.label;
      buttons.disabled = false;
    } else {
      buttons.textContent = "";
      buttons.disabled = true;
    }
  });
}

function nextRound() {
    if (state.balance <= BANKRUPT_THRESHOLD) {
    endGame(true);
    return;
  }
  if (state.round >= MAX_ROUNDS) {
    endGame(false);
    return;
  }

  state.round++;
  state.currentScenario = weightedPick();
  state.seen.add(state.currentScenario.id);
  renderStats();
  showScenario(state.currentScenario);
}


function choose(index) {
  const scenario = state.currentScenario;
  const choice = scenario.choices[index];

  state.locked = true;
  els.choiceBtns.forEach((buttons) => (buttons.disabled = true));

  const delta = resolveBalance(choice.balance);
  state.balance += delta;
  renderStats();
  showBalanceChange(delta);
  state.totalChoices += 1;
  renderProgress();
  if (choice.smart) state.smartCount++;

  applyEffects(choice.effect);

  setTimeout(() => {
    state.locked = false;
    nextRound();
  }, 1000);
}

const $ = (id) => document.getElementById(id);

const els = {
  title: $("ScenarioTitle"),
  text: $("ScenarioText"),
  balance: $("moneyamount"),
  balanceChange: $("balance-change"),
  choiceBtns: [...document.querySelectorAll(".buttons button")],
  endOverlay: $("end-overlay"),
  endTitle: $("end-title"),
  endGrade: $("end-grade"),
  endBalance: $("end-balance"),
  endAssess: $("end-assess"),
};

const progressDots = [
    ...document.querySelectorAll(".progress-dot")
];

function renderProgress() {
    progressDots.forEach((dot, index) => {
        dot.classList.toggle(
            "completed",
            index < state.totalChoices
        );
    });
}

let balanceChangeTimeout;

function showBalanceChange(delta) {
    const indicator = els.balanceChange;

    clearTimeout(balanceChangeTimeout);

    indicator.classList.remove("show", "gain", "loss", "neutral");

    if (delta > 0) {
        indicator.textContent = `+${fmt(delta)}`;
        indicator.classList.add("gain");
    } else if (delta < 0) {
        indicator.textContent = `-${fmt(Math.abs(delta))}`;
        indicator.classList.add("loss");
    } else {
        indicator.textContent = "±$0";
        indicator.classList.add("neutral");
    }

    void indicator.offsetWidth;
    indicator.classList.add("show");

    balanceChangeTimeout = setTimeout(() => {
        indicator.classList.remove("show");
    }, 1500);
}

function renderStats() {
  els.balance.textContent = fmt(state.balance);
}

els.choiceBtns.forEach((btn, i) => btn.addEventListener("click", () => choose(i)));
$("restart-btn").addEventListener("click", startGame);
$("reality-home").addEventListener("click", startGame);

nextRound(); // start the game

function endGame(bankrupt) {
  state.playing = false;
  const smart = state.smartCount;
  const total = state.totalChoices;

  els.endOverlay.classList.remove("hidden");
  els.endBalance.textContent = fmt(state.balance);

  if (bankrupt) {
    els.endTitle.textContent = "Bankrupt!";
    els.endGrade.textContent = "F";
    return;
  }

  const ratio = total > 0 ? smart / total : 0;
  let grade, assess;
  if (state.balance >= 1500 && ratio >= 0.7) {
    grade = "A"; assess = "Well done! You're a real pro, take what you've learnt and use it in real life!";
  } else if (state.balance >= 1250) {
    grade = "B"; assess = "Overall positive trend! You're on the right track.";
  } else if (state.balance >= 1000) {
    grade = "C"; assess = "All round balanced, could earn a bit more here and there.";
  } else if (state.balance >= 750) {
    grade = "D"; assess = "Consider saving some more money in the future.";
  } else {
    grade = "F"; assess = "As long as you're happy..! And broke.. maybe download a budgetting app.";
  }
  els.endTitle.textContent = "Round's Over!";
  els.endGrade.textContent = grade;
  els.endAssess.textContent = assess;
}

function startGame() {
  state.balance = START_BALANCE;
  state.round = 0;
  state.smartCount = 0;
  state.totalChoices = 0;
  renderProgress();
  state.seen.clear();
  for (const key in state.categoryWeight) state.categoryWeight[key] = 1;
  state.playing = true;
  state.locked = false;
  els.endOverlay.classList.add("hidden");
  renderStats();
  nextRound();
}