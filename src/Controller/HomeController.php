<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;


class HomeController extends AbstractController
{

    /**
     * @Route("/")
     */
    public function index(){


        return $this->render('home.html.twig');
    }


   /**
    * @Route("/search", name="search", methods={"GET","POST"})
    */
    public function search(Request $request){

        $search = $request->request->get('search');
        if($search){
            $api_url = "https://fr.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=".ucwords($search)."&redirects=true";
            $api_url = str_replace(' ','%20',$api_url);

            if($data = json_decode(@file_get_contents($api_url))){
                foreach($data->query->pages as $key=>$val){
                    $pageId = $key;
                break;
                }
                $content = $data->query->pages->$pageId->extract;

                return $this->render('article.html.twig', [
                    'content' => $content,
                ]);
            } else {
                echo 'No results found';
            }
        }

        return $this->render('home.html.twig');
    }

}