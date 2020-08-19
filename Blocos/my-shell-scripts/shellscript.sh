#!/bin/bash
#Eu sou Tryber e...
echo "Meu primeiro script em Shell Script!"
#Aqui vai um comentário
#echo "Hack the Planet"
#echo "Criando um diretório"
#QUEM=`whoami`
#echo $QUEM
#QUEM=whoami
#echo $QUEM
#QUEM="Sou o usuário"
#echo $QUEM
#QUEM="Estou logado como usuário `whoami`"
#echo $QUEM
#QUEM="Estou logado como usuário whoami"
#echo $QUEM

#Bônus

echo -e "sheel\nscript\nusando\nestrutura"



TAREFAS="Trabalhar Viajar Beber"

echo "Permição para beber"

read -p "Qual é o seu nome?" NOME

echo "Muito prazer, $NOME"

read -p "$NOME, qual é a sua idade?" IDADE

if [ $IDADE -lt 18 ]
then
    echo "Permissão negada, você é menor de idade!!"
else
    for ITEM in $TAREFAS
    do 
    echo "Agora você já pode $ITEM sem se preocupar"
    done
    echo "Beba com moderação!"
fi

#Exercício 1

echo "Shell Scrip é demais!"

#Exercício 2

VAR="Shell Script com variaveis é dmss!"
echo $VAR

#Exercício 3

VAR=`hostname`
echo "Este script está rodando no computador $VAR"

#EX4

FILE="./Planet"

if [ -d $FILE ]
    then
    echo "O caminho $FILE está habilitado!"
if [ -w $FILE ]
    then
    echo "Você não tem permissão p/ editar"
else
    echo "Você tem permissão p/ editar"
fi
else
    echo "O caminho $FILE não está habilitado"
fi

#EX5,6,7

#read -p "Qual o caminho do arquivo ou diretório?" FILE

FILE=$1
CONTADOR=0

for ITEM in $*
do
if [ -f $ITEM ]
    then 
    echo "$ITEM é um arquivo!"
else
    if [ -d $ITEM ]
    then
    echo "$ITEM é um diretório"
    LINHAS=`ls -la | grep -e "^-" | wc -l`
    echo "O $ITEM tem $LINHAS arquivos"

else
    echo "$ITEM é um outro tipo de arquivo"
fi
fi
done


#Oie
