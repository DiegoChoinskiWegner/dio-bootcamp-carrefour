package me.dio.academia.digital.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_avaliacoes")

//dados da avaliação física que irão para o BD
public class AvaliacaoFisica {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne //um aluno tem varias avaliações físicas
  @JoinColumn(name = "aluno_id")
  private Aluno aluno;

  private LocalDateTime dataDaAvaliacao = LocalDateTime.now();

  @Column(name="peso_atual")
  private double peso;

  @Column(name="percentual_gordura_atual")
  private double percentualDeGordura;

  @Column(name="media_calorica_ingerida_dia")
  private double médiaCaloricaIngeridaDia;

  @Column(name="circunferencia_abdominal")
  private double circunferenciaAbdominal;

}
