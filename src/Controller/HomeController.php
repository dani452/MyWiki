<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


class HomeController extends AbstractController
{

    /**
     * @Route("/", name="home")
     */
    public function index(){


        return $this->render('home.html.twig');
    }

    /**
    * @Route("/search", name="search", methods={"GET","POST"})
    */
    public function search(Request $request){
        
        $titles = [];
        if(($request->request->get('email') == "") && ($request->get('search') !== null)){
            $search = $request->request->get('search');
            if($search != ""){
                $api = "https://fr.wikipedia.org/w/api.php?action=query&format=json&list=search&srwhat=text&srsearch=".ucwords($search);
                $api = str_replace(' ','%20',$api);

                if(($data = json_decode(@file_get_contents($api))) !== null){
                        
                        foreach($data->query->search as $r){
                            
                            array_push($titles, "<h3><a href=/wikiList/".$r->pageid.">".$r->title."</a></h3>");
                            array_push($titles, $r ->snippet);
                        }

                } else {
                    echo 'No contents found';
                }
    
                return $this->render('list.html.twig', [
                    'titles' => $titles,
                ]);
            }
                return $this->render('home.html.twig');
        }
    }    

    /**
    * @Route("/wikiList/{id}", methods={"GET","POST"})
    */
    public function research($id, Request $request){

        if($request->request->get('email') == ""){
            if($id != ""){
                
                $api = "https://fr.wikipedia.org/w/api.php?action=parse&format=json&pageid=".$id."&prop=text&formatversion=2";
                $api = str_replace(' ','%20',$api);

                if(($data = json_decode(@file_get_contents($api))) !== null){
                    
                    $content = $data->parse->text;

                } else {
                    echo 'No contents found';
                }
    
                return $this->render('article.html.twig', [
                    'content' => $content
                ]);
            }
                return $this->render('home.html.twig');
        }
        }

    /**
    * @Route("/wiki/{id}", methods={"GET","POST"})
    */
    public function searchArticle($id, Request $request){

        if($request->request->get('email') == ""){
            if($id != ""){
                
                $api = "https://fr.wikipedia.org/w/api.php?action=parse&section=0&format=json&prop=text&page=".ucwords($id);
                $api = str_replace(' ','%20',$api);

                if(($data = json_decode(@file_get_contents($api))) !== null){
                    foreach($data->parse->text as $text){
                        $content = $text;
                    break;
                    }
                  
                } else {
                    echo 'No contents found';
                }
    
                return $this->render('article.html.twig', [
                    'content' => $content
                ]);
            }
                return $this->render('home.html.twig');
        }
    }
}
          

