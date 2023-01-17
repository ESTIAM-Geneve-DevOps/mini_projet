# Mini projet

Le but de ce projet est de mettre en pratique les éléments vu en cours:
- Méthode Agile
- Git
- Github
- Travis CI

Il faut selon le projet donné être en mesure de:
- Collaborer et plannifier les tâches
- Construire une pipeline CI pour créer un code livrable
- Utiliser Git pour surveiller les changement fait sur le projet
- Utiliser travis CI pour lancer des tests automatisés

Le but est de construire une application qui est capable de prendre des commandes d'un utilisateur et retourner une réponse.

Une commande à la même forme qu'une commande qu'on ferrait dans un terminal, sauf qu'il n'y a pas d'options.

```
[nom de commande] [arguments]
```

Les users stories du projet sont dans le fichier `user_stories.md`.

Certains testes sont implémentés, mais les testes pour le client REST (peudos tests d'intégration) doivent être implémentés avec Travis CI. Il faut faire en sorte que les tests puissent s'exécuter seulement quand le code est pushé dans la branche `develop`.
